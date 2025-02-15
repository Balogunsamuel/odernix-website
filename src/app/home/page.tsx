"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { comorant_garamond, montserrat } from "@/utils/fonts";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Contacts from "@/component/contact/contacts";
import NextNProgress from "nextjs-progressbar";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);
  const onClick = () => setPlayVideo(true);

  useLayoutEffect(() => {
    if (videoRef.current) videoRef.current.play();
  }, [playVideo]);

  return (
    <div>
      <NextNProgress color={`#321a3f`} />
      <ul className="grid_lines w-full flex absolute z-50 justify-between">
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
      </ul>
      <section className=" relative flex items-center justify-center overflow-hidden h-screen">
        <div className="relative h-full w-full z-30 p-5  text-white main-gradient bg-opacity-50">
          <div className="flex flex-row h-full container z-20 mx-auto relative">
            <div className="md:w-7/12 h-full flex flex-col justify-between">
              <div className="text-xl text-white text-center"></div>
              <div className="flex flex-col pt-16 items-start">
                <div className={comorant_garamond.className}>
                  <h1 className="home_main_text">
                  Welcome to Odernix Homes
                    <br />
                    Buildings to
                    <br />
                    Choose from
                  </h1>
                </div>
                <Link
                  href="/contact"
                  onClick={() => (window.location.href = "/contact")}
                >
                  <div
                    className={`items-center border-l-2 border-white flex mt-10 flex backdrop-blur-sm bg-white/30`}
                  >
                    <div className={montserrat.className}>
                      <p className={`text-lg px-5 pr-40 text-white`}>
                        Get started
                      </p>
                    </div>
                    <div
                      className={`bg-white text-black flex justify-center items-center p-5`}
                    >
                      <div
                        className={`transform hover:translate-x-3 transition duration-500 ease-in-out`}
                      >
                        <BsArrowRight className={` h-6 w-6 `} />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="pb-2 md:pb-10">
                <Contacts />
              </div>
            </div>
            <div className=" h-full flex justify-end hidden md:flex">
              <div className={"absolute right-0 bottom-60"}>
                <div className={montserrat.className}>
                  <div
                    className={`items-center border-l-2 border-white flex  w-80 flex backdrop-blur-sm bg-white/30`}
                  >
                    <p className={`text-lg p-5 text-white`}>
                      Travelers today seek more than just a place to stay – they
                      crave an experience that is beyond the ordinary.
                    </p>
                    {/* Contact Form */}
                    {/*  <form
                      action="https://formspree.io/f/mpwqlobp"
                      method="POST"
                      className="w-full flex flex-col space-y-3"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-white bg-white/80 text-black"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-white bg-white/80 text-black"
                      />
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="p-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-white bg-white/80 text-black"
                      ></textarea>
                      <button
                        type="submit"
                        className="bg-white text-black p-2 rounded-md hover:bg-gray-200"
                      >
                        Submit
                      </button>
                    </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-auto min-w-full md:min-w-50 md:right-0 min-h-full max-w-none"
          onLoadedMetadata={(e) => (e.target as HTMLVideoElement).play()}
          ref={videoRef}
          onClick={onClick}
        >
          <source src="/head_video2.mp4" type="video/mp4" />
        </video>
      </section>
    </div>
  );
}
