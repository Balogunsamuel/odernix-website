"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import NextNProgress from "nextjs-progressbar";
import ProjectData from "@/server-actions/projects.json";

const services = [
  {
    title: "Real Estate",
    description:
      "We specialize in identifying profitable opportunities and optimizing property assets for lasting success. From residential and commercial real estate to land development, we provide end-to-end solutions to maximize value.",
  },
  {
    title: "Engineering",
    description:
      "Our multidisciplinary engineering team ensures structural integrity and efficiency. We cover architectural, structural, civil, mechanical, electrical, and environmental engineering to deliver high-quality projects.",
  },
  {
    title: "Investment",
    description:
      "Our tailored investment strategies align with financial goals and risk tolerance. We provide direct ownership guidance, REITs opportunities, and innovative funding models for real estate investments.",
  },
  {
    title: "Consultancy",
    description:
      "We empower clients with strategic insights and market analysis. From feasibility studies to project management, we ensure informed decision-making and successful project execution.",
  },
  {
    title: "Innovation",
    description:
      "We leverage technology for cutting-edge real estate solutions. From PropTech advancements to sustainability initiatives, we ensure efficient, eco-friendly, and cost-effective solutions.",
  },
];

function Services() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
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
      <NextNProgress color="#321a3f" />
      <ParallaxProvider>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-white bg-main py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold">Our Services</h1>
          <p className="mt-5 text-lg md:text-xl max-w-3xl">
            Transforming spaces with innovation, expertise, and a commitment to
            excellence in real estate and construction.
          </p>
        </section>

        {/* Services Section */}
        <section className="container mx-auto py-20 px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="shadow-lg border border-gray-200 p-8 rounded-xl text-center bg-white hover:shadow-2xl transform hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl font-bold text-main mb-5">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-100 py-16 text-center">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose Odernix Homes?
          </h2>
          <div className="mt-5 max-w-3xl mx-auto text-lg text-gray-600">
            <ul className="list-disc list-inside space-y-3 text-left">
              <li>
                <strong>Expert Team:</strong> Our multidisciplinary team merges
                expertise in real estate, various engineering fields,
                consultancy, and investment to provide comprehensive solutions.
              </li>
              <li>
                <strong>Client-Centric Approach:</strong> We prioritize our
                client's needs, collaborating closely to ensure personalized
                strategies that meet their objectives.
              </li>
              <li>
                <strong>Innovative Solutions:</strong>: We proactively stay
                abreast of industry trends, adopting innovative technologies and
                practices to distinguish ourselves in the marketplace.
              </li>
              <li>
                <strong>Proven Track Record:</strong> With years of experience
                and a portfolio of successful projects, we are renowned for our
                excellence and integrity in all engagements, giving our clients
                the confidence that their projects are in safe hands.
              </li>
            </ul>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="bg-main text-white py-16 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Build the Future with Us
          </h2>
          <p className="mt-5 text-lg max-w-2xl mx-auto">
            Are you interested in discovering how Odernix Homes can transform
            your real estate endeavors through engineering, consultancy,
            investment, and innovation? Contact us today for a consultation!
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-white text-gray-800 py-3 px-8 rounded-full text-lg font-semibold transition"
          >
            Get in Touch
          </Link>
        </section>
      </ParallaxProvider>
    </div>
  );
}

export default Services;
