"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Calendar,
  Users,
  Star,
  Filter,
  Grid3X3,
  List,
  Search,
  ArrowRight,
  Home,
  Briefcase,
  TrendingUp,
  Award,
  CheckCircle,
  Eye,
  Heart,
  Share2,
  Play,
  Clock,
} from "lucide-react";
import { comorant_garamond, montserrat, montserrat_bold } from "@/utils/fonts";
import dynamic from "next/dynamic";
import ProjectData from "@/server-actions/projects.json";
import NextNProgress from "nextjs-progressbar";
import logo3 from "../../../public/logo-s-white.png";

const ParallaxProvider = dynamic(() => import("../ParallaxProvider"), {
  ssr: false,
});

interface ProjectDataProp {
  id: number;
  name: string;
  sub: string;
  description: string;
  address: string;
  lat?: number;
  lng?: number;
  status: string;
  image: string;
  projectDetails: string;
  deliveryDate: string;
  projectType: string;
  propertyNumber: string;
  propertyType: string[];
  gallery: string[];
  slug: string;
}

const filterOptions = [
  { label: "All Projects", value: "all", icon: Building2 },
  { label: "Residential", value: "residential", icon: Home },
  { label: "Commercial", value: "commercial", icon: Briefcase },
  { label: "Completed", value: "completed", icon: CheckCircle },
];

const statusColors = {
  Completed: "bg-green-500 text-white",
  Ongoing: "bg-blue-500 text-white",
  Planning: "bg-amber-500 text-white",
  "to be completed by 2025": "bg-purple-500 text-white",
};

function Projects() {
  const [projects, setProjects] = useState<ProjectDataProp[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectDataProp[]>(
    []
  );
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load projects from JSON data
    const loadProjects = () => {
      setIsLoading(true);
      setTimeout(() => {
        setProjects(ProjectData.ProjectData);
        setFilteredProjects(ProjectData.ProjectData);
        setIsLoading(false);
      }, 1000);
    };

    loadProjects();
  }, []);

  useEffect(() => {
    let filtered = projects;

    // Filter by category
    if (activeFilter !== "all") {
      if (activeFilter === "completed") {
        filtered = filtered.filter((project) =>
          project.status.toLowerCase().includes("completed")
        );
      } else {
        filtered = filtered.filter((project) =>
          project.projectType.toLowerCase().includes(activeFilter.toLowerCase())
        );
      }
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (project) =>
          project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  }, [projects, activeFilter, searchTerm]);

  function truncateText(text: string, maxLength: number) {
    return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
  }

  const ProjectCard = ({
    project,
    index,
  }: {
    project: ProjectDataProp;
    index: number;
  }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
          viewMode === "list" ? "flex" : ""
        }`}
      >
        {/* Image Section */}
        <div
          className={`relative overflow-hidden ${
            viewMode === "list" ? "w-1/3" : "h-80"
          }`}
        >
          <div className="relative w-full h-full">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <Building2 className="w-12 h-12 text-gray-400" />
              </div>
            )}
            <Image
              src={project.image}
              alt={project.name}
              fill
              className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {/* Overlay with Actions */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`w-12 h-12 rounded-full ${
                  isLiked ? "bg-red-500" : "bg-white/20"
                } backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform`}
              >
                <Heart
                  className={`w-6 h-6 ${
                    isLiked ? "text-white fill-current" : "text-white"
                  }`}
                />
              </button>
              <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
                <Share2 className="w-6 h-6 text-white" />
              </button>
              <Link href={`/project/${project.slug}`}>
                <button className="w-12 h-12 rounded-full bg-amber-500 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6 text-white" />
                </button>
              </Link>
            </div>
          </div>

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                statusColors[project.status as keyof typeof statusColors] ||
                "bg-gray-500 text-white"
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Project Number */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-gray-800">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className={`p-8 ${viewMode === "list" ? "flex-1" : ""}`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{project.address}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                {project.name}
              </h3>

              {project.sub && (
                <p className="text-amber-600 font-medium mb-3 italic">
                  {project.sub}
                </p>
              )}
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
            {truncateText(project.description, viewMode === "list" ? 200 : 120)}
          </p>

          {/* Project Details Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
              <div className="text-sm text-blue-600 mb-1">Properties</div>
              <div className="text-lg font-bold text-blue-800">
                {project.propertyNumber}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
              <div className="text-sm text-green-600 mb-1">Delivery</div>
              <div className="text-lg font-bold text-green-800">
                {project.deliveryDate}
              </div>
            </div>
          </div>

          {/* Property Types */}
          {project.propertyType && project.propertyType.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.propertyType.slice(0, 3).map((type, typeIndex) => (
                <span
                  key={typeIndex}
                  className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium"
                >
                  {type}
                </span>
              ))}
              {project.propertyType.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                  +{project.propertyType.length - 3} more
                </span>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Link href={`/project/${project.slug}`} className="flex-1">
              <button className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group/btn">
                <span className="mr-2">View Details</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center">
                <Calendar className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen">
      <NextNProgress color="#f59e0b" />
      <ParallaxProvider>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20"></div>
          </div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>

          <div className="relative container mx-auto px-5 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-500/30 mb-6">
                  <Star className="w-4 h-4 mr-2 text-amber-400" />
                  <span className="text-sm font-medium text-amber-300">
                    Premium Portfolio
                  </span>
                </div>

                <div className={comorant_garamond.className}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                    Our
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                      Projects
                    </span>
                  </h1>
                </div>

                <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                  We invest across Nigeria, focusing on locations where our team
                  has experience and where there is scope to aggregate assets in
                  our target sectors. Wherever we invest, we partner with highly
                  skilled management teams to build leading real estate
                  businesses.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  {[
                    {
                      number: projects.length.toString(),
                      label: "Total Projects",
                      icon: Building2,
                    },
                    {
                      number: "30+",
                      label: "Units In Construction",
                      icon: Home,
                    },
                    { number: "2", label: "Active Sites", icon: TrendingUp },
                    {
                      number: "100%",
                      label: "Client Satisfaction",
                      icon: Award,
                    },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Logo */}
          <div className="absolute bottom-0 right-0 opacity-5">
            <Image src={logo3} alt="" className="w-72" />
          </div>
        </section>

        {/* Filters and Controls */}
        <section className="py-12 bg-white border-b border-gray-200 sticky top-20 z-40">
          <div className="container mx-auto px-5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-3">
                {filterOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setActiveFilter(option.value)}
                    className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeFilter === option.value
                        ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <option.icon className="w-4 h-4 mr-2" />
                    {option.label}
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === "grid" ? "bg-white shadow-sm" : "text-gray-600"
                  }`}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-lg transition-colors ${
                    viewMode === "list" ? "bg-white shadow-sm" : "text-gray-600"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Results Counter */}
            <div className="mt-6 text-gray-600">
              Showing{" "}
              <span className="font-semibold text-amber-600">
                {filteredProjects.length}
              </span>{" "}
              of <span className="font-semibold">{projects.length}</span>{" "}
              projects
              {searchTerm && ` for "${searchTerm}"`}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-5">
            {isLoading ? (
              // Loading State
              <div
                className={`grid gap-8 ${
                  viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl overflow-hidden shadow-lg animate-pulse"
                  >
                    <div className="h-80 bg-gray-300"></div>
                    <div className="p-8">
                      <div className="h-4 bg-gray-300 rounded mb-4"></div>
                      <div className="h-6 bg-gray-300 rounded mb-4"></div>
                      <div className="h-16 bg-gray-300 rounded mb-4"></div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="h-16 bg-gray-300 rounded"></div>
                        <div className="h-16 bg-gray-300 rounded"></div>
                      </div>
                      <div className="h-10 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredProjects.length === 0 ? (
              // Empty State
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  No Projects Found
                </h3>
                <p className="text-gray-600 mb-8">
                  {searchTerm
                    ? `No projects match your search for "${searchTerm}"`
                    : "No projects match the selected filters"}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveFilter("all");
                  }}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              // Projects Grid/List
              <div
                className={`grid gap-8 ${
                  viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                }`}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-5 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Invest in Premium Real Estate?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
                Discover exceptional investment opportunities in Abuja's
                thriving real estate market. Our expert team is ready to guide
                you through every step of your investment journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
                <Link href="/contact" className="flex-1">
                  <div className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center w-full">
                    <span className="mr-2">Get in Touch</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>

                <Link href="/services" className="flex-1">
                  <div className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center w-full">
                    <Building2 className="w-5 h-5 mr-2" />
                    Our Services
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </ParallaxProvider>
    </div>
  );
}

export default Projects;
