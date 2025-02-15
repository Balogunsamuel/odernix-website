"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useLayoutEffect, useRef, useState } from "react";
import { comorant_garamond, montserrat } from "@/utils/fonts";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Contacts from "@/component/contact/contacts";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);
  const onClick = () => setPlayVideo(true);

  useLayoutEffect(() => {
    if (videoRef.current) videoRef.current.play();
  }, [playVideo]);

  return (
    <>
      <ul className="grid_lines w-full flex absolute z-50 justify-between">
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
      </ul>
      <section className="relative flex items-center justify-center overflow-hidden min-h-screen">
        <div className="relative h-full w-full z-30 p-5 text-white main-gradient bg-opacity-50">
          <div className="flex flex-col md:flex-row h-full container z-20 mx-auto relative">
            <div className="md:w-7/12 h-full flex flex-col justify-between">
              <div className="text-xl text-white text-center"></div>
              <div className="flex flex-col pt-16 items-start">
                <div className={comorant_garamond.className}>
                  <h1 className="home_main_text text-center md:text-left">
                    Welcome to Odernix Homes
                  </h1>
                </div>
                <Link href="/contact">
                  <div className="items-center border-l-2 border-white flex mt-10 backdrop-blur-sm bg-white/30 p-2 md:p-4 w-full md:w-auto">
                    <div className={montserrat.className}>
                      <p className="text-lg px-5 text-white">Get started</p>
                    </div>
                    <div className="bg-white text-black flex justify-center items-center p-5">
                      <div className="transform hover:translate-x-3 transition duration-500 ease-in-out">
                        <BsArrowRight className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="pb-2 md:pb-10">
                <Contacts />
              </div>
            </div>
            <div className="h-full flex justify-end hidden md:flex">
              <div className="absolute right-0 bottom-20 md:bottom-60 w-full md:w-80">
                <div className={montserrat.className}>
                  <div className="items-center border-l-2 border-white flex backdrop-blur-sm bg-white/30 p-4">
                    <p className="text-lg text-white">
                      Odernix Homes stands out in the real estate sector with
                      its unique approach that integrates advanced engineering
                      solutions, expert consultancy services, strategic
                      investment approaches, and innovative technologies. Our
                      comprehensive methodology is designed to cater to our
                      clients' varied needs, promote sustainable growth, and
                      maximize project value.
                    </p>
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
          className="absolute w-full h-full object-cover"
          onLoadedMetadata={(e) => (e.target as HTMLVideoElement).play()}
          ref={videoRef}
          onClick={onClick}
        >
          <source src="/head_video2.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}
