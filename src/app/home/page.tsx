"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { comorant_garamond, montserrat } from "@/utils/fonts";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import {
  Building2,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowDown,
} from "lucide-react";
import Contacts from "@/component/contact/contacts";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const onClick = () => setPlayVideo(true);

  useLayoutEffect(() => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .catch((err) => console.warn("Video play error:", err));
    }
  }, [playVideo]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Grid Lines */}
      <ul className="grid_lines w-full flex absolute z-50 justify-between pointer-events-none">
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
      </ul>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden h-screen">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          onLoadedMetadata={(e) => (e.target as HTMLVideoElement).play()}
          ref={videoRef}
          onClick={onClick}
        >
          <source src="/head_video2.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div className="relative h-full w-full z-30 text-white">
          <div className="flex flex-col lg:flex-row h-full container mx-auto relative px-5">
            {/* Left Content */}
            <div className="lg:w-7/12 h-full flex flex-col justify-center lg:justify-between py-20">
              {/* Main Hero Content */}
              <div className="flex flex-col items-start space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Abuja, Nigeria</span>
                </div>

                {/* Main Heading */}
                <div className={comorant_garamond.className}>
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Welcome to
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                      Odernix Homes
                    </span>
                  </h1>
                </div>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                  Transforming Real Estate Through Engineering Excellence,
                  Expert Consultancy, and Innovative Solutions in the Heart of
                  Nigeria's Capital
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link href="/contact">
                    <div className="group bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                      <span className="text-lg font-semibold mr-3">
                        Get Started Today
                      </span>
                      <BsArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>

                  <Link href="/projects">
                    <div className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg flex items-center transition-all duration-300 hover:bg-white/20 group">
                      <span className="text-lg font-semibold mr-3">
                        View Projects
                      </span>
                      <Building2 className="w-5 h-5" />
                    </div>
                  </Link>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">5+</div>
                    <div className="text-sm text-gray-300">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">50+</div>
                    <div className="text-sm text-gray-300">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400">
                      100+
                    </div>
                    <div className="text-sm text-gray-300">Happy Clients</div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="hidden lg:block pb-10">
                <Contacts />
              </div>
            </div>

            {/* Right Content - Info Card */}
            <div className="lg:w-5/12 h-full flex justify-end items-center">
              <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-8 max-w-md mx-auto lg:mx-0 lg:mr-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Why Choose Us?
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Excellence in Every Project
                    </p>
                  </div>
                </div>

                <p className="text-gray-200 leading-relaxed mb-6">
                  Our comprehensive methodology integrates advanced engineering
                  solutions, expert consultancy services, and innovative
                  technologies to maximize project value and promote sustainable
                  growth.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-white text-sm">
                      Engineering Excellence
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-white text-sm">
                      Expert Consultancy
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-white text-sm">
                      Innovation & Technology
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    <span className="text-white text-sm">
                      Sustainable Growth
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between text-sm text-gray-300">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      <span>+234 912 899 9972</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-300 mt-2">
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <span>info@odernixhomes.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center text-white/70">
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Real Estate Development",
                description: "Premium residential and commercial properties",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Users,
                title: "Engineering Services",
                description: "Structural, civil, and environmental solutions",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Award,
                title: "Consultancy",
                description: "Expert guidance and market analysis",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: MapPin,
                title: "Investment Opportunities",
                description: "Strategic real estate investments",
                color: "from-amber-500 to-orange-600",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-amber-400">2022</div>
              <h3 className="text-xl font-semibold">Founded</h3>
              <p className="text-gray-300">
                Established as a proudly Nigerian company
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-amber-400">Wuse 2</div>
              <h3 className="text-xl font-semibold">Prime Location</h3>
              <p className="text-gray-300">Located in the heart of Abuja</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-amber-400">24/7</div>
              <h3 className="text-xl font-semibold">Support</h3>
              <p className="text-gray-300">Always here to help our clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let us help you navigate the real estate landscape in Abuja. Contact
            us today to start your journey to home ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <div className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center">
                <span className="mr-2">Contact Us Now</span>
                <BsArrowRight className="w-5 h-5" />
              </div>
            </Link>
            <Link href="/projects">
              <div className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 transition-colors">
                Explore Projects
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
