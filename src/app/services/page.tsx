"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import dynamic from "next/dynamic";
import NextNProgress from "nextjs-progressbar";
import logo3 from "../../../public/logo-s-white.png";
import ProjectData from "@/server-actions/projects.json";
import {
  comorant_garamond,
  inter,
  montserrat,
  montserrat_bold,
} from "@/utils/fonts";

const ParallaxProvider = dynamic(() => import("../ParallaxProvider"), {
  ssr: false,
});

interface ProjectDataProp {
  id: number;
  name: string;
  sub: string;
  description: string;
  location: string;
  image: string;
  status: string;
  projectDetails: string;
  deliveryDate: string;
  projectType: number;
  propertyNumber: number;
  propertyType: string[];
  gallery: string[];
}

const services = [
  {
    title: "Real Estate Development",
    description:
      "We design, build, and manage premium real estate projects, ensuring top-tier quality and sustainable urban development.",
  },
  {
    title: "Investment Opportunities",
    description:
      "Partner with us for profitable and sustainable real estate investments, guided by expert analysis and strategic planning.",
  },
  {
    title: "Consulting Services",
    description:
      "We provide expert advice on property acquisition, development strategies, and market trends to help you maximize value.",
  },
  {
    title: "Innovative Construction Solutions",
    description:
      "Leveraging the latest technology and best practices, we deliver efficient, durable, and cost-effective building solutions.",
  },
];

function Projects() {
  const [projects, setProjects] = useState<ProjectDataProp[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects"); // Replace with your actual API
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <NextNProgress color={`#321a3f`} />
      <ParallaxProvider>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-main text-white py-32">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold">Our Services</h1>
            <p className="mt-5 text-lg md:text-xl max-w-3xl mx-auto">
              Transforming spaces with innovation, expertise, and a commitment
              to excellence in real estate and construction.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto py-20 px-5 md:px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="shadow-lg border border-gray-200 p-8 rounded-lg text-center bg-white hover:shadow-2xl transition-transform transform hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-4xl font-bold text-main mb-5">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800">
              Ready to Build the Future with Us?
            </h2>
            <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you're looking to develop, invest, or consult, we’re here
              to make your vision a reality.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-main text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-opacity-90 transition"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </ParallaxProvider>
    </div>
  );
}

export default Projects;
