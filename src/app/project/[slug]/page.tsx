"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  MapPin,
  Calendar,
  Users,
  Star,
  ArrowLeft,
  Download,
  Share2,
  Heart,
  Phone,
  Mail,
  Eye,
  ChevronLeft,
  ChevronRight,
  Play,
  Maximize,
  Home,
  Bath,
  Car,
  Ruler,
  CheckCircle,
  Award,
  Shield,
  Zap,
  TreePine,
  Wifi,
  Camera,
  Navigation,
  Clock,
  Hammer,
  Truck,
  HardHat,
  Construction,
  TrendingUp,
  Activity,
  ArrowRight,
  X,
} from "lucide-react";
import { comorant_garamond, montserrat, montserrat_bold } from "@/utils/fonts";
import { BsArrowRight } from "react-icons/bs";
import { Parallax } from "react-scroll-parallax";
import logo3 from "../../../../public/logo-s-white.png";
import dynamic from "next/dynamic";
import ProjectData from "@/server-actions/projects.json";
import NextNProgress from "nextjs-progressbar";

const ParallaxProvider = dynamic(() => import("../../ParallaxProvider"), {
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

interface ConstructionUpdate {
  id: number;
  date: string;
  title: string;
  description: string;
  progress: number;
  images: string[];
  milestone: string;
  phase: string;
}

// Mock construction updates data
const constructionUpdates: ConstructionUpdate[] = [
  {
    id: 1,
    date: "2024-12-15",
    title: "Foundation Completion",
    description:
      "Successfully completed the foundation work with reinforced concrete structure. All foundation inspections passed with excellent ratings.",
    progress: 85,
    images: ["/bastion.jpg", "/bastion2.jpg"],
    milestone: "Foundation Phase",
    phase: "Structural Work",
  },
  {
    id: 2,
    date: "2024-11-20",
    title: "Structural Framework Progress",
    description:
      "Main structural framework is 70% complete. Steel reinforcement and concrete pouring proceeding on schedule.",
    progress: 70,
    images: ["/terraza.jpg", "/bastion.jpg"],
    milestone: "Structural Phase",
    phase: "Construction",
  },
  {
    id: 3,
    date: "2024-10-15",
    title: "Site Preparation Completed",
    description:
      "Land clearing, excavation, and site preparation works completed. Ready for foundation work to commence.",
    progress: 45,
    images: ["/bastion2.jpg", "/terraza.jpg"],
    milestone: "Site Preparation",
    phase: "Preparation",
  },
  {
    id: 4,
    date: "2024-10-15",
    title: "Site Preparation Completed",
    description:
      "Land clearing, excavation, and site preparation works completed. Ready for foundation work to commence.",
    progress: 45,
    images: ["/bastion2.jpg", "/terraza.jpg"],
    milestone: "Site Preparation",
    phase: "Preparation",
  },
];

const amenities = [
  { icon: Wifi, label: "High-Speed Internet" },
  { icon: Car, label: "Parking Space" },
  { icon: Shield, label: "24/7 Security" },
  { icon: TreePine, label: "Green Spaces" },
  { icon: Zap, label: "Backup Power" },
  { icon: Users, label: "Community Center" },
];

const features = [
  {
    icon: Home,
    label: "Modern Design",
    description: "Contemporary architectural style",
  },
  {
    icon: Bath,
    label: "Premium Finishes",
    description: "High-quality materials throughout",
  },
  {
    icon: Award,
    label: "Award Winning",
    description: "Recognized for excellence",
  },
  {
    icon: CheckCircle,
    label: "Quality Assured",
    description: "Rigorous quality control",
  },
];

const nearbyLocations = [
  { name: "Aso Rock", distance: "10 km", type: "Landmark" },
  { name: "Nnamdi Azikiwe Airport", distance: "25 km", type: "Airport" },
  { name: "Central Business District", distance: "5 km", type: "Business" },
  { name: "Unity Schools", distance: "3 km", type: "Education" },
];

function ProjectDetail({ params }: any) {
  const [project, setProject] = useState<ProjectDataProp | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedUpdate, setSelectedUpdate] =
    useState<ConstructionUpdate | null>(null);

  useEffect(() => {
    const loadProject = () => {
      setIsLoading(true);
      setTimeout(() => {
        const foundProject = ProjectData.ProjectData.find(
          (item: any) => item.slug === params.slug
        );

        if (foundProject) {
          setProject(foundProject);
        }
        setIsLoading(false);
      }, 1000);
    };

    loadProject();
  }, [params.slug]);

  const nextImage = () => {
    if (project?.gallery) {
      setCurrentImageIndex((prev) =>
        prev === project.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project?.gallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.gallery.length - 1 : prev - 1
      );
    }
  };

  function truncateText(text: string, maxLength: number) {
    if (!text) return "";
    return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>
          <Link href="/projects">
            <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors">
              Back to Projects
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <NextNProgress color="#f59e0b" />
      <ParallaxProvider>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-screen flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${project.image}')` }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Navigation */}
          <div className="absolute top-8 left-8 z-30">
            <Link href="/projects">
              <button className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-all">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Projects
              </button>
            </Link>
          </div>

          {/* Actions */}
          <div className="absolute top-8 right-8 z-30 flex space-x-3">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`w-12 h-12 rounded-xl ${
                isLiked ? "bg-red-500" : "bg-white/10"
              } backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-all`}
            >
              <Heart
                className={`w-6 h-6 ${
                  isLiked ? "text-white fill-current" : "text-white"
                }`}
              />
            </button>
            <button className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-all">
              <Share2 className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-5">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-500/30 mb-6">
                  <Building2 className="w-4 h-4 mr-2 text-amber-400" />
                  <span className="text-sm font-medium text-amber-300">
                    {project.status}
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span className="text-lg">{project.address}</span>
                </div>

                {/* Title */}
                <div className={comorant_garamond.className}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
                    {project.name}
                  </h1>
                  {project.sub && (
                    <h2 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-8">
                      {project.sub}
                    </h2>
                  )}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-bold text-amber-400 mb-2">
                      {project.propertyNumber}
                    </div>
                    <div className="text-gray-300 text-sm">Units</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-bold text-amber-400 mb-2">
                      {project.deliveryDate.split(" ")[0]}
                    </div>
                    <div className="text-gray-300 text-sm">Delivery</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-bold text-amber-400 mb-2">
                      {project.propertyType?.length || 0}
                    </div>
                    <div className="text-gray-300 text-sm">Types</div>
                  </div>
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                    <div className="text-3xl font-bold text-amber-400 mb-2">
                      100%
                    </div>
                    <div className="text-gray-300 text-sm">Quality</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                      <span className="mr-2">Contact Us</span>
                      <BsArrowRight className="w-5 h-5" />
                    </button>
                  </Link>

                  <Link href="/odernix-homes-brochure.pdf">
                    <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all flex items-center">
                      <Download className="w-5 h-5 mr-2" />
                      Download Brochure
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-1 h-8 bg-white/30 rounded-full">
                <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="container mx-auto px-5">
            <div className="flex space-x-8 overflow-x-auto">
              {[
                { id: "overview", label: "Overview" },
                { id: "updates", label: "Construction Updates" },
                { id: "gallery", label: "Gallery" },
                { id: "features", label: "Features" },
                { id: "location", label: "Location" },
                { id: "contact", label: "Contact" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-amber-500 text-amber-600"
                      : "border-transparent text-gray-700 hover:text-amber-600"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {/* Overview Section */}
          {activeTab === "overview" && (
            <motion.section
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-20 bg-white"
            >
              <div className="container mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Elegance and Comfort
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">
                          Location
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {project.address}
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center">
                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-800 mb-2">
                          Delivery
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {project.deliveryDate}
                        </p>
                      </div>
                    </div>

                    {/* Property Types */}
                    {project.propertyType &&
                      project.propertyType.length > 0 && (
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-4">
                            Property Types
                          </h3>
                          <div className="flex flex-wrap gap-3">
                            {project.propertyType.map((type, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-medium"
                              >
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                  </div>

                  {/* Image */}
                  <div className="relative">
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>

                    {/* Floating Stats */}
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-800">
                            Premium
                          </div>
                          <div className="text-gray-600 text-sm">
                            Quality Project
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Construction Updates Section */}
          {activeTab === "updates" && (
            <motion.section
              key="updates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-20 bg-gradient-to-br from-gray-50 to-white"
            >
              <div className="container mx-auto px-5">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Construction Updates
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Follow the progress of our construction work with regular
                    updates, photos, and milestones
                  </p>
                </div>

                {/* Progress Overview */}
                <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        85%
                      </h3>
                      <p className="text-gray-600">Overall Progress</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Construction className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Foundation
                      </h3>
                      <p className="text-gray-600">Current Phase</p>
                    </div>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Q4 2025
                      </h3>
                      <p className="text-gray-600">Expected Completion</p>
                    </div>
                  </div>
                </div>

                {/* Timeline of Updates */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-orange-600 hidden md:block"></div>

                  {constructionUpdates.map((update, index) => (
                    <motion.div
                      key={update.id}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="relative flex items-start mb-12 group"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10"></div>

                      {/* Content Card */}
                      <div className="md:ml-16 bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2 w-full">
                        <div className="flex flex-col lg:flex-row gap-8">
                          {/* Text Content */}
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-4">
                              <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                                {update.phase}
                              </span>
                              <span className="text-gray-500 text-sm">
                                {update.date}
                              </span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                              {update.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                              {update.description}
                            </p>

                            {/* Progress Bar */}
                            <div className="mb-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-700">
                                  Progress
                                </span>
                                <span className="text-sm font-bold text-amber-600">
                                  {update.progress}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-3">
                                <motion.div
                                  className="bg-gradient-to-r from-amber-500 to-orange-600 h-3 rounded-full"
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${update.progress}%` }}
                                  transition={{ duration: 1.5, delay: 0.5 }}
                                  viewport={{ once: true }}
                                />
                              </div>
                            </div>

                            <div className="flex items-center text-amber-600 font-medium">
                              <Activity className="w-4 h-4 mr-2" />
                              <span>Milestone: {update.milestone}</span>
                            </div>
                          </div>

                          {/* Images */}
                          <div className="lg:w-1/3">
                            <div className="grid grid-cols-2 gap-4">
                              {update.images.map((img, imgIndex) => (
                                <motion.div
                                  key={imgIndex}
                                  whileHover={{ scale: 1.05 }}
                                  className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                                  onClick={() => setSelectedUpdate(update)}
                                >
                                  <Image
                                    src={img}
                                    alt={`Update ${imgIndex + 1}`}
                                    width={150}
                                    height={150}
                                    className="w-full h-24 object-cover"
                                  />
                                  <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-white" />
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Construction Team Section */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 text-white mt-16">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold mb-4">
                      Our Construction Team
                    </h3>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                      Meet the dedicated professionals working around the clock
                      to bring this project to life
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: HardHat,
                        title: "Site Engineers",
                        count: "4+",
                        description:
                          "Experienced engineers overseeing construction",
                      },
                      {
                        icon: Users,
                        title: "Skilled Workers",
                        count: "50+",
                        description: "Certified construction professionals",
                      },
                      {
                        icon: Truck,
                        title: "Equipment Units",
                        count: "20+",
                        description: "Modern construction machinery",
                      },
                    ].map((team, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <team.icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-2">{team.title}</h4>
                        <div className="text-3xl font-bold text-amber-400 mb-2">
                          {team.count}
                        </div>
                        <p className="text-gray-300 text-sm">
                          {team.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Gallery Section */}
          {activeTab === "gallery" && (
            <motion.section
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-20 bg-gray-50"
            >
              <div className="container mx-auto px-5">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Project Gallery
                  </h2>
                  <p className="text-xl text-gray-600">
                    Explore every detail of this exceptional development
                  </p>
                </div>

                {project.gallery && project.gallery.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                        onClick={() => {
                          setCurrentImageIndex(index);
                          setIsGalleryOpen(true);
                        }}
                      >
                        <Image
                          src={image}
                          alt={`Gallery ${index + 1}`}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <Maximize className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Gallery images will be available soon
                    </p>
                  </div>
                )}
              </div>
            </motion.section>
          )}

          {/* Features Section */}
          {activeTab === "features" && (
            <motion.section
              key="features"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-20 bg-white"
            >
              <div className="container mx-auto px-5">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Premium Features
                  </h2>
                  <p className="text-xl text-gray-600">
                    Discover what makes this project exceptional
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center group"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-3">
                        {feature.label}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Amenities */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12">
                  <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
                    World-Class Amenities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {amenities.map((amenity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center group"
                      >
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                          <amenity.icon className="w-6 h-6 text-amber-600" />
                        </div>
                        <p className="text-gray-700 font-medium text-sm">
                          {amenity.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Location Section */}
          {activeTab === "location" && (
            <motion.section
              key="location"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-20 bg-gray-50"
            >
              <div className="container mx-auto px-5">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Prime Location
                  </h2>
                  <p className="text-xl text-gray-600">
                    Strategically located in the heart of Abuja
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  {/* Location Info */}
                  <div className="space-y-8">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <Navigation className="w-6 h-6 mr-3 text-amber-600" />
                        Address Details
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-amber-600 mr-3 mt-1" />
                          <div>
                            <p className="font-semibold text-gray-800">
                              Full Address
                            </p>
                            <p className="text-gray-600">{project.address}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Building2 className="w-5 h-5 text-amber-600 mr-3 mt-1" />
                          <div>
                            <p className="font-semibold text-gray-800">Area</p>
                            <p className="text-gray-600">Abuja, FCT Nigeria</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Nearby Locations */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Nearby Landmarks
                      </h3>
                      <div className="space-y-4">
                        {nearbyLocations.map((location, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
                          >
                            <div>
                              <p className="font-semibold text-gray-800">
                                {location.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {location.type}
                              </p>
                            </div>
                            <span className="text-amber-600 font-semibold">
                              {location.distance}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Map Placeholder */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="w-full h-96 bg-gray-200 rounded-xl flex items-center justify-center">
                      <div className="text-center text-gray-500">
                        <MapPin className="w-16 h-16 mx-auto mb-4" />
                        <p>Interactive Map</p>
                        <p className="text-sm">Coming Soon</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* Contact Section */}
          {activeTab === "contact" && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-20 bg-white"
            >
              <div className="container mx-auto px-5">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Get in Touch
                  </h2>
                  <p className="text-xl text-gray-600">
                    Ready to make this project your next investment?
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  {/* Contact Form */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                      Schedule a Visit
                    </h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        />
                      </div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      />
                      <textarea
                        rows={4}
                        placeholder="Message or specific requirements"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                      />
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                      >
                        <span className="mr-2">Send Message</span>
                        <BsArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  </div>

                  {/* Contact Information */}
                  <div className="space-y-8">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        Contact Information
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                            <Phone className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              Call Us
                            </p>
                            <p className="text-gray-600">
                              +234 (0)912 899 9972
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                            <Mail className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              Email Us
                            </p>
                            <p className="text-gray-600">
                              info@odernixhomes.com
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                            <MapPin className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              Visit Office
                            </p>
                            <p className="text-gray-600">
                              A4, 29b N'Djamena Crescent, Wuse 2, Abuja
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">
                        Quick Actions
                      </h3>
                      <div className="space-y-4">
                        <a
                          href="tel:+2349128999972"
                          className="w-full bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition-colors flex items-center justify-center"
                        >
                          <Phone className="w-5 h-5 mr-2" />
                          Call Now
                        </a>
                        <Link href="/contact">
                          <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center">
                            <Calendar className="w-5 h-5 mr-2" />
                            Schedule Tour
                          </button>
                        </Link>
                        <Link href="/odernix-homes-brochure.pdf">
                          <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center">
                            <Download className="w-5 h-5 mr-2" />
                            Download Brochure
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Project Details Section */}
        <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={comorant_garamond.className}>
                  <h2 className="text-5xl md:text-7xl font-bold mb-6">
                    The Project
                    <br />
                    in Details
                  </h2>
                </div>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {project.projectDetails}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">Investment Value</h3>
                    <p className="text-gray-300">
                      High ROI potential in prime Abuja location
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                    <h3 className="text-xl font-bold mb-2">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-300">
                      Premium materials and expert craftsmanship
                    </p>
                  </div>
                </div>

                <Link href="/odernix-homes-brochure.pdf">
                  <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download Full Brochure
                  </button>
                </Link>
              </motion.div>

              {/* Decorative Element */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <Image
                    src={logo3}
                    alt="Odernix Logo"
                    className="w-72 opacity-20 mx-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-amber-400 mb-2">
                        {project.propertyNumber}
                      </div>
                      <div className="text-gray-300">Premium Units</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                More From Us
              </h2>
              <p className="text-xl text-gray-600">
                Explore other exceptional projects in our portfolio
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ProjectData.ProjectData.filter(
                (item) => item.slug !== project.slug
              )
                .slice(0, 3)
                .map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <Link href={`/project/${item.slug}`}>
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-800">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{item.address}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {truncateText(item.description, 100)}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-amber-600 font-semibold">
                            {item.propertyNumber} Units
                          </span>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-600 transition-colors" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
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
                Ready to Invest in {project.name}?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
                Don't miss this opportunity to own a piece of Abuja's premium
                real estate. Contact our expert team today for personalized
                consultation and exclusive offers.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
                <Link href="/contact" className="flex-1">
                  <div className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center w-full">
                    <span className="mr-2">Contact Us</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>

                <a
                  href="tel:+2349128999972"
                  className="flex-1 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 pt-8 border-t border-white/30">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Wuse 2, Abuja, Nigeria</span>
                </div>
                <div className="flex items-center">
                  <span className="font-semibold">+234 912 899 9972</span>
                </div>
                <div className="flex items-center">
                  <span>info@odernixhomes.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Modal */}
        {isGalleryOpen && project.gallery && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative">
                <Image
                  src={project.gallery[currentImageIndex]}
                  alt={`Gallery ${currentImageIndex + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                />

                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
              </div>

              <div className="text-center mt-4 text-white">
                {currentImageIndex + 1} of {project.gallery.length}
              </div>
            </div>
          </div>
        )}

        {/* Construction Update Modal */}
        {selectedUpdate && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full bg-white rounded-3xl">
              <button
                onClick={() => setSelectedUpdate(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {selectedUpdate.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedUpdate.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {selectedUpdate.images.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Update image ${index + 1}`}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </ParallaxProvider>
    </div>
  );
}

export default ProjectDetail;
