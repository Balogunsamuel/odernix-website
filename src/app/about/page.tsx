"use client";

import React from "react";
import * as url from "url";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import img1 from "../../../public/frame47.png";
import img2 from "../../../public/bastion.jpg";
import img3 from "../../../public/bastion2.jpg";
import img4 from "../../../public/terraza.jpg";
import img5 from "../../../public/img5.png";
import pattern from "../../public/pattern.png";
import img7 from "../../public/img7.png";
import img8 from "../../../public/img8.png";
import logo from "../../public/logo-white-slim.png";
import logo2 from "../../public/logo-s-dark.png";
import logo3 from "../../../public/logo-s-white.png";
import { Parallax } from "react-scroll-parallax";
import frame227 from "../../public/frame227.png";
import { comorant_garamond, montserrat, montserrat_bold } from "@/utils/fonts";
import dynamic from "next/dynamic";
import NextNProgress from "nextjs-progressbar";

const ParallaxProvider = dynamic(() => import("../ParallaxProvider"), {
  ssr: false,
});
function About(props: {}) {
  return (
    <div>
      <ParallaxProvider>
        <section className="relative flex flex-col items-center justify-center overflow-hidden">
          <div className="relative h-full w-full z-30 text-white bg-main bg-opacity-50">
            <div className="flex flex-row mt-20 h-full container mx-auto relative"></div>
          </div>
        </section>

        <section className="relative flex flex-col items-center justify-center overflow-hidden py-20 md:py-32">
          <div className="container mx-auto flex flex-col md:flex-row px-3 md:px-0">
            <div className="md:w-7/12 flex flex-col justify-between">
              <div className={comorant_garamond.className}>
                <h1 className="text-5xl md:text-7xl text_main_color font-bold leading-tight">
                  About Odernix Homes
                  <div className={comorant_garamond.className}>
                    <h4 className="text-3xl md:text-5xl text_main_color font-bold leading-tight">
                      <br /> Creating Spaces You’ll Love
                    </h4>
                  </div>
                </h1>
              </div>
              <p className={`text-lg p-5 text_main_color`}>
                Transforming Real Estate Through Engineering, Consultancy, and
                Innovation Odernix Homes stands out in the real estate sector
                with its unique approach that integrates advanced engineering
                solutions, expert consultancy services, strategic investment
                approaches, and innovative technologies. Our comprehensive
                methodology is designed to cater to our client's various needs,
                promote sustainable growth, and maximize project value.{" "}
              </p>
            </div>
            <div className="md:w-5/12 flex justify-end">
              <Image
                src={img1}
                alt="Odernix Homes"
                className="h-auto w-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-white py-20 px-5 md:px-0">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-6/12 text-left">
              <Parallax speed={11}>
                <div className={comorant_garamond.className}>
                  <h4 className="text-2xl md:text-5xl text_main_color font-bold leading-tight">
                    <br /> Creating Affordable Houses for Everyone
                  </h4>
                </div>
                <div className={montserrat.className}>
                  <p
                    className={` tracking-normal pb-6 px-2 md:pl-14 font-semibold`}
                  >
                    Odernix Homes is the real estate and hospitality division of
                    Odernix Nigeria Limited, a proudly Nigerian Incorporated
                    company. Founded on November 11, 2022, Odernix Nigeria
                    Limited specializes in Engineering Construction services,
                    Consultancy, Environmental Management, Project Management,
                    and both Commercial and Residential real estate development.
                  </p>
                  <p className={` tracking-normal pb-6 px-2 `}>
                    At Odernix Homes, we are a dynamic and innovative real
                    estate company dedicated to facilitating seamless
                    transactions for clients looking to buy, sell, or rent
                    properties. Our team of seasoned real estate professionals
                    is committed to delivering exceptional service, whether you
                    are a first-time homebuyer, an experienced investor, or a
                    landlord.
                  </p>
                  <p className={` tracking-normal pb-6 px-2 `}>
                    We take pride in our extensive knowledge of the local real
                    estate market, enabling us to effectively match clients with
                    properties that suit their unique needs. Leveraging
                    cutting-edge technology and strategic marketing approaches,
                    we simplify the process of finding and securing your dream
                    home.
                  </p>
                  <p className={` tracking-normal pb-6 px-2 md:pl-14`}>
                    At Odernix Homes, our mission is to make the real estate
                    journey as smooth and stress-free as possible. We understand
                    that navigating the real estate landscape can be daunting,
                    and we are here to guide you every step of the way.
                  </p>
                  <p className={` tracking-normal pb-6 px-2 md:pl-14`}>
                    Contact us today to embark on your journey to home ownership
                    and experience the Odernix difference!
                  </p>
                </div>
              </Parallax>
            </div>

            <div className="flex lg:w-5/12 relative">
              <div className={`absolute top-1/2 -translate-y-1/2`}>
                <div className={`w-8/12 flex items-end`}>
                  <Parallax speed={11}>
                    <Image src={img1} alt="" />
                  </Parallax>
                </div>
              </div>
              <div className={`w-1/12 flex self-end`}></div>
              <div className={`w-11/12 flex self-end`}>
                <Image src={img5} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col items-center justify-center overflow-hidden py-14 md:py-24">
          <div className="container mx-auto flex flex-col md:flex-row px-3 md:px-0">
            <div className="md:w-7/12">
              <div className={montserrat.className}>
                <h1 className="text-3xl md:text-5xl text_main_color font-bold leading-tight">
                  Discover Our Newest Projects
                </h1>
                <p className="text-lg text_main_color mt-4">
                  Explore exclusive listings, vibrant neighborhoods, and expert
                  insights to help you find a property that’s just right for
                  you.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3 md:px-0 container mx-auto mt-10">
            {[
              {
                img: img2,
                name: "The Bastion",
                location: "Durumi District, Abuja",
                type: "Semis-detached",
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
              <Parallax speed={5 * (index + 1)} key={index}>
                <div className={montserrat.className}>
                  <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <p className="text-xl text_main_color">{project.name}</p>
                      <p className="text-sm">{project.location}</p>
                      <p className="">{project.type}</p>
                    </div>
                  </div>
                </div>
              </Parallax>
            ))}
          </div>
        </section>

        <section className="relative bg-main flex flex-col items-center w-full h-screen text-white overflow-hidden">
          <div className="relative h-full w-full z-30 pt-20 md:pt-40 pb-10 bg-opacity-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-5 md:px-0">
              <div className="md:w-6/12 flex justify-center">
                <Image
                  src={img8}
                  alt="Property Image"
                  className="max-h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-6/12 flex flex-col text-left px-5 md:px-10">
                <Parallax speed={5}>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    <span className="text-xl">Available now at</span> The
                    TERRAZA
                  </h1>
                  <p className="text-lg py-3">Durumi District, Abuja</p>
                  <div className="grid grid-cols-3 gap-4 mt-5">
                    <div>
                      <p className="text-sm">Beds</p>
                      <p className="text-lg font-semibold">4</p>
                    </div>
                    <div>
                      <p className="text-sm">Bath</p>
                      <p className="text-lg font-semibold">5</p>
                    </div>
                    <div>
                      <p className="text-sm">Square Feet</p>
                      <p className="text-lg font-semibold">1024</p>
                    </div>
                  </div>
                  <p className="text-md py-3 leading-relaxed">
                    A 4-bedroom terrace offering a spacious and modern living
                    solution for families or individuals seeking ample space and
                    privacy. It blends independence with community living.
                  </p>
                </Parallax>
              </div>
            </div>
          </div>
        </section>
      </ParallaxProvider>
    </div>
  );
}

export default About;
