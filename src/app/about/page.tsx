"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Parallax } from "react-scroll-parallax";
import NextNProgress from "nextjs-progressbar";
import {
  Building2,
  Users,
  Award,
  MapPin,
  Calendar,
  Target,
  Lightbulb,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Heart,
  Zap,
} from "lucide-react";
import img1 from "../../../public/frame47.png";
import img2 from "../../../public/bastion.jpg";
import img3 from "../../../public/bastion2.jpg";
import img4 from "../../../public/terraza.jpg";
import img5 from "../../../public/img5.png";
import img6 from "../../../public/img8.png";
import img7 from "../../../public/bastion6.jpg";
import logo from "../../public/logo-white-slim.png";
import { comorant_garamond, montserrat } from "@/utils/fonts";

const ParallaxProvider = dynamic(() => import("../ParallaxProvider"), {
  ssr: false,
});

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We conduct business with the highest ethical standards, ensuring transparency and honesty in all our dealings.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for perfection in every project, delivering quality that exceeds expectations and industry standards.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description:
      "Our clients are at the heart of everything we do. We listen, understand, and deliver solutions that meet their unique needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace cutting-edge technologies and creative solutions to stay ahead in the evolving real estate landscape.",
  },
];

const milestones = [
  {
    year: "2022",
    title: "Company Founded",
    description:
      "Odernix Nigeria Limited was established on November 11, 2022, as a proudly Nigerian incorporated company.",
  },
  {
    year: "2023",
    title: "First Major Project",
    description:
      "Launched our flagship development project, establishing our presence in Abuja's competitive real estate market.",
  },
  {
    year: "2024",
    title: "Portfolio Expansion",
    description:
      "Expanded our portfolio to include multiple residential and commercial projects across Abuja.",
  },
  {
    year: "2025",
    title: "Continued Growth",
    description:
      "Continuing to transform Nigeria's real estate landscape with innovative solutions and exceptional service.",
  },
];

const teamHighlights = [
  {
    title: "Engineering Experts",
    description:
      "Seasoned professionals in structural, civil, and environmental engineering",
    icon: Building2,
  },
  {
    title: "Real Estate Specialists",
    description:
      "Market experts with deep knowledge of Abuja's property landscape",
    icon: MapPin,
  },
  {
    title: "Investment Advisors",
    description:
      "Financial strategists focused on maximizing returns and managing risk",
    icon: TrendingUp,
  },
  {
    title: "Innovation Leaders",
    description:
      "Technology pioneers bringing PropTech solutions to Nigerian market",
    icon: Zap,
  },
];

function About() {
  return (
    <div className="min-h-screen">
      <NextNProgress
        color="#f59e0b"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
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
                    Proudly Nigerian
                  </span>
                </div>

                <div className={comorant_garamond.className}>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                    About
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                      Odernix Homes
                    </span>
                  </h1>
                </div>

                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                  Transforming Real Estate Through Engineering Excellence,
                  Expert Consultancy, and Innovation in the Heart of Nigeria's
                  Capital
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                  {[
                    { number: "2022", label: "Founded" },
                    { number: "4+", label: "Projects" },
                    { number: "50+", label: "Clients" },
                    { number: "24/7", label: "Support" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-amber-100 rounded-full">
                    <Heart className="w-4 h-4 mr-2 text-amber-600" />
                    <span className="text-sm font-medium text-amber-800">
                      Our Story
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                    Built on Nigerian
                    <span className="text-amber-600"> Excellence</span>
                  </h2>

                  <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                      Odernix Homes is the real estate and hospitality division
                      of
                      <strong className="text-gray-800">
                        {" "}
                        Odernix Nigeria Limited
                      </strong>
                      , a proudly Nigerian incorporated company founded on
                      November 11, 2022. We specialize in Engineering
                      Construction services, Consultancy, Environmental
                      Management, Project Management, and both Commercial and
                      Residential real estate development.
                    </p>

                    <p>
                      At Odernix Homes, we are a dynamic and innovative real
                      estate company dedicated to facilitating seamless
                      transactions for clients looking to buy, sell, or rent
                      properties. Our team of seasoned real estate professionals
                      is committed to delivering exceptional service, whether
                      you are a first-time homebuyer, an experienced investor,
                      or a landlord.
                    </p>

                    <p>
                      We take pride in our extensive knowledge of the local real
                      estate market, enabling us to effectively match clients
                      with properties that suit their unique needs. Leveraging
                      cutting-edge technology and strategic marketing
                      approaches, we simplify the process of finding and
                      securing your dream home.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700 font-medium">
                        Licensed & Regulated
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700 font-medium">
                        Nigerian Owned
                      </span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span className="text-gray-700 font-medium">
                        Expert Team
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={img5}
                    alt="Odernix Homes Building"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

                  {/* Floating Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          Our Mission
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Making real estate journeys smooth and stress-free
                        </p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full blur-xl opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-200 rounded-full blur-xl opacity-60"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our
                commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From inception to becoming a leading real estate company in
                Abuja
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-600 hidden md:block"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 group hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Expert Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Multidisciplinary professionals committed to delivering
                exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamHighlights.map((team, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <team.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{team.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {team.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Discover Our Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore exclusive listings, vibrant neighborhoods, and expert
                insights to help you find a property that's just right for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  img: img4,
                  name: "The Terraza",
                  location: "Durumi District, Abuja",
                  type: "Luxury Semi-detached and Terraces",
                  status: "Completed",
                },
                {
                  img: img2,
                  name: "The Bastion",
                  location: "Durumi District, Abuja",
                  type: "Luxury Semi-detached",
                  status: "Ongoing",
                },
                {
                  img: img3,
                  name: "The Bastion",
                  location: "Durumi District, Abuja",
                  type: "Modern Apartments",
                  status: "Ongoing",
                },
                {
                  img: img6,
                  name: "The Bastion II",
                  location: "Durumi District, Abuja",
                  type: "Modern Apartments",
                  status: "Planning",
                },
                {
                  img: img7,
                  name: "The Bastion II",
                  location: "Durumi District, Abuja",
                  type: "Modern Apartments",
                  status: "Planning",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : project.status === "Ongoing"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                      {project.type}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/projects">
                <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <span className="mr-2">View All Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
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
                Experience the Odernix Difference
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
                Contact us today to embark on your journey to home ownership and
                discover how we can transform your real estate dreams into
                reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
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

export default About;
