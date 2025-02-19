"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Parallax } from "react-scroll-parallax";
import NextNProgress from "nextjs-progressbar";
import img1 from "../../../public/frame47.png";
import img2 from "../../../public/bastion.jpg";
import img3 from "../../../public/bastion2.jpg";
import img4 from "../../../public/terraza.jpg";
import img5 from "../../../public/img5.png";
import logo from "../../public/logo-white-slim.png";
import { comorant_garamond, montserrat } from "@/utils/fonts";

const ParallaxProvider = dynamic(() => import("../ParallaxProvider"), {
  ssr: false,
});

function About() {
  return (
    <div>
      <NextNProgress
        color="#29d"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ParallaxProvider>
        <section className="relative flex flex-col items-center justify-center overflow-hidden">
          <div className="relative w-full text-white bg-main bg-opacity-50">
            <div className="container mx-auto py-20 text-center">
              <h1 className="text-4xl md:text-6xl font-bold">
                About Odernix Homes
              </h1>
              <p className="container mx-auto py-20 text-center flex flex-col items-center ">
                Transforming Real Estate Through Engineering, Consultancy, and
                Innovation. Odernix Homes stands out in the real estate sector
                with its unique approach that integrates advanced engineering
                solutions, expert consultancy services, strategic investment
                approaches, and innovative technologies. Our comprehensive
                methodology is designed to cater to our client's various needs,
                promote sustainable growth, and maximize project value.{" "}
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto flex flex-col md:flex-row px-5 md:px-0 py-16">
          <div className="md:w-7/12">
            <p className="text-lg text_main_color leading-relaxed">
              Odernix Homes is the real estate and hospitality division of
              Odernix Nigeria Limited, a proudly Nigerian Incorporated company.
              Founded on November 11, 2022, Odernix Nigeria Limited specializes
              in Engineering Construction services, Consultancy, Environmental
              Management, Project Management, and both Commercial and
              Residential real estate development.
            </p>
            <p className="text-lg text_main_color leading-relaxed mt-6">
              At Odernix Homes, we are a dynamic and innovative real estate
              company dedicated to facilitating seamless transactions for
              clients looking to buy, sell, or rent properties. Our team of
              seasoned real estate professionals is committed to delivering
              exceptional service, whether you are a first-time homebuyer, an
              experienced investor, or a landlord.
            </p>
            <p className="text-lg text_main_color leading-relaxed mt-6">
              We take pride in our extensive knowledge of the local real estate
              market, enabling us to effectively match clients with properties
              that suit their unique needs. Leveraging cutting-edge technology
              and strategic marketing approaches, we simplify the process of
              finding and securing your dream home.
            </p>
            <p className="text-lg text_main_color leading-relaxed mt-6">
              At Odernix Homes, our mission is to make the real estate journey
              as smooth and stress-free as possible. We understand that
              navigating the real estate landscape can be daunting, and we are
              here to guide you every step of the way.
            </p>
            <p className="text-lg text_main_color leading-relaxed mt-6">
              Contact us today to embark on your journey to home ownership and
              experience the Odernix difference!
            </p>
          </div>
          <div className="md:w-5/12 flex justify-end mt-6 md:mt-0">
            <Image
              src={img5}
              alt="Odernix Homes"
              className="h-auto w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section className="container mx-auto px-5 md:px-0 py-16 text-center">
          <h2 className="text-3xl md:text-5xl text_main_color font-bold">
            Discover Our Newest Projects
          </h2>
          <p className="text-lg text_main_color mt-4">
            Explore exclusive listings, vibrant neighborhoods, and expert
            insights to help you find a property that’s just right for you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              {
                img: img2,
                name: "The Bastion",
                location: "Durumi District, Abuja",
                type: "Semi-detached",
              },
              {
                img: img3,
                name: "The Bastion 2",
                location: "Durumi District, Abuja",
                type: "Apartments",
              },
              {
                img: img4,
                name: "The Terraza",
                location: "Durumi District, Abuja",
                type: "Terraces",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Image
                  src={project.img}
                  alt={project.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-5">
                  <p className="text-xl text_main_color font-semibold">
                    {project.name}
                  </p>
                  <p className="text-sm">{project.location}</p>
                  <p className="text-sm font-light">{project.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </ParallaxProvider>
    </div>
  );
}

export default About;
