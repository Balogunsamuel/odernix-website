"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import NextNProgress from "nextjs-progressbar";
import {
  Building2,
  Wrench,
  TrendingUp,
  Users,
  Lightbulb,
  Shield,
  MapPin,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Zap,
  PieChart,
} from "lucide-react";
import { comorant_garamond, montserrat } from "@/utils/fonts";

const services = [
  {
    icon: Building2,
    title: "Real Estate Development",
    description:
      "We specialize in identifying profitable opportunities and optimizing property assets for lasting success. From residential and commercial real estate to land development, we provide end-to-end solutions to maximize value.",
    features: [
      "Residential Development",
      "Commercial Properties",
      "Land Acquisition",
      "Property Management",
    ],
    color: "from-blue-500 to-blue-600",
    bgGradient: "from-blue-50 to-blue-100",
  },
  {
    icon: Wrench,
    title: "Engineering Excellence",
    description:
      "Our multidisciplinary engineering team ensures structural integrity and efficiency. We cover architectural, structural, civil, mechanical, electrical, and environmental engineering to deliver high-quality projects.",
    features: [
      "Structural Engineering",
      "Civil Engineering",
      "Architectural Design",
      "Environmental Solutions",
    ],
    color: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
  },
  {
    icon: TrendingUp,
    title: "Investment Solutions",
    description:
      "Our tailored investment strategies align with financial goals and risk tolerance. We provide direct ownership guidance, REITs opportunities, and innovative funding models for real estate investments.",
    features: [
      "Investment Planning",
      "Portfolio Management",
      "Market Analysis",
      "ROI Optimization",
    ],
    color: "from-purple-500 to-purple-600",
    bgGradient: "from-purple-50 to-purple-100",
  },
  {
    icon: Users,
    title: "Expert Consultancy",
    description:
      "We empower clients with strategic insights and market analysis. From feasibility studies to project management, we ensure informed decision-making and successful project execution.",
    features: [
      "Market Research",
      "Feasibility Studies",
      "Project Management",
      "Strategic Planning",
    ],
    color: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-50 to-orange-100",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    description:
      "We leverage technology for cutting-edge real estate solutions. From PropTech advancements to sustainability initiatives, we ensure efficient, eco-friendly, and cost-effective solutions.",
    features: [
      "PropTech Solutions",
      "Smart Building Tech",
      "Sustainability Planning",
      "Digital Innovation",
    ],
    color: "from-indigo-500 to-indigo-600",
    bgGradient: "from-indigo-50 to-indigo-100",
  },
];

const whyChooseUs = [
  {
    icon: Target,
    title: "Expert Team",
    description:
      "Our multidisciplinary team merges expertise in real estate, various engineering fields, consultancy, and investment to provide comprehensive solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description:
      "We prioritize our client's needs, collaborating closely to ensure personalized strategies that meet their objectives.",
  },
  {
    icon: Zap,
    title: "Innovative Solutions",
    description:
      "We proactively stay abreast of industry trends, adopting innovative technologies and practices to distinguish ourselves in the marketplace.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description:
      "With years of experience and a portfolio of successful projects, we are renowned for our excellence and integrity in all engagements.",
  },
];

const stats = [
  { number: "10+", label: "Projects Completed", icon: Building2 },
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "3+", label: "Years Experience", icon: Clock },
  { number: "24/7", label: "Support Available", icon: Shield },
];

function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen">
      <NextNProgress color="#f59e0b" />
      <ParallaxProvider>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/api/placeholder/100/100')] opacity-5"></div>
          </div>

          <div className="relative container mx-auto px-5 py-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-500/30 mb-6">
                <Star className="w-4 h-4 mr-2 text-amber-400" />
                <span className="text-sm font-medium text-amber-300">
                  Excellence in Every Service
                </span>
              </div>

              <div className={comorant_garamond.className}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                  Our
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    Services
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Transforming spaces with innovation, expertise, and a commitment
                to excellence in real estate and construction across Abuja,
                Nigeria
              </p>

              {/* Quick Navigation */}
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                      activeService === index
                        ? "bg-amber-500 border-amber-500 text-white"
                        : "border-white/30 text-gray-300 hover:border-amber-500/50 hover:text-amber-300"
                    }`}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Comprehensive Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From concept to completion, we deliver excellence in every
                aspect of real estate and construction
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden relative"
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-900 transition-colors group/btn flex items-center justify-center">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
          <div className="container mx-auto px-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Why Choose Odernix Homes?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence and client satisfaction sets us
                apart in the Nigerian real estate market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-6 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures project success from start to
                finish
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Planning",
                  description:
                    "We begin with detailed consultations to understand your vision, requirements, and budget constraints.",
                },
                {
                  step: "02",
                  title: "Design & Engineering",
                  description:
                    "Our expert team develops comprehensive designs and engineering solutions tailored to your project.",
                },
                {
                  step: "03",
                  title: "Execution & Delivery",
                  description:
                    "We manage every aspect of implementation, ensuring quality, timeline, and budget adherence.",
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold group-hover:scale-110 transition-transform">
                    {phase.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {phase.description}
                  </p>
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
                Ready to Build the Future with Us?
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
                Discover how Odernix Homes can transform your real estate
                endeavors through engineering excellence, expert consultancy,
                strategic investment, and innovative solutions. Contact us today
                for a consultation!
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-md mx-auto">
                <Link href="/contact" className="flex-1">
                  <div className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center w-full">
                    <span className="mr-2">Get in Touch</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>

                <Link href="/projects" className="flex-1">
                  <div className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center w-full">
                    <PieChart className="w-5 h-5 mr-2" />
                    View Projects
                  </div>
                </Link>
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
              </div>
            </motion.div>
          </div>
        </section>
      </ParallaxProvider>
    </div>
  );
}

export default Services;
