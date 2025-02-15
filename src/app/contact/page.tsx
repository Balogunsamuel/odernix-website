"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useLayoutEffect, useRef, useState } from "react";
import { comorant_garamond, montserrat } from "@/utils/fonts";
/* import Map from "@/component/map/map"; */
import { Icon } from "@iconify/react";
import email from "@iconify/icons-mdi/email";
import phoneIcon from "@iconify/icons-mdi/phone";
import locationIcon from "@iconify/icons-mdi/map-marker";
import NextNProgress from "nextjs-progressbar";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);
  const onClick = () => setPlayVideo(true);

  useLayoutEffect(() => {
    if (videoRef.current) videoRef.current.play();
  }, [playVideo]);

  const location = {
    address:
      "29b N’djamena Crescent off Aminu Kano Crescent Wuse II, Abuja Nigeria",
    lat: 9.078779,
    lng: 7.461789,
  };

  const [selectedOption, setSelectedOption] = useState("option1");

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
      <div className="relative w-full min-h-screen flex flex-col items-center text-white overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
          onLoadedMetadata={(e) => (e.target as HTMLVideoElement).play()}
          ref={videoRef}
          onClick={onClick}
        >
          <source src="/head_video2.mp4" type="video/mp4" />
        </video>

        {/* Content */}
        <section className="relative z-10 flex flex-col items-center justify-center w-full px-5 md:px-10 lg:px-20 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            <div className={comorant_garamond.className}>
              Get in Touch with Us
            </div>
          </h1>
          <p className="mt-4 text-lg max-w-2xl">
            Whether you're a property investor, an agent, or a direct buyer,
            we’re here to assist you. Book a tour, ask questions, or explore our
            properties. Let’s make your dream home a reality!
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-10 w-full max-w-7xl">
            <div className="md:w-7/12 bg-white/10 p-8 rounded-lg backdrop-blur-md relative z-10">
              <h2 className="text-3xl font-semibold text-white mb-6">
                Book a Tour
              </h2>
              <form
                action="https://formspree.io/f/mwpvnqzw"
                method="POST"
                className="flex flex-col space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="p-3 rounded-md border bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-white w-full"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="p-3 rounded-md border bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-white w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  required
                  className="p-3 rounded-md border bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-white w-full"
                />
                <select
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  name="tour"
                  required
                  className="p-3 rounded-md border bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-white w-full"
                >
                  <option value="" disabled>
                    Book a Tour
                  </option>
                  <option value="yes">Yes, I want to book a tour</option>
                  <option value="no">No, I don’t want a tour</option>
                </select>

                <button
                  type="submit"
                  className="bg-white text-black p-3 rounded-md hover:bg-gray-200"
                >
                  Submit
                </button>
              </form>
            </div>

            <div className="md:w-5/12 flex flex-col gap-6 bg-white/10 p-8 rounded-lg backdrop-blur-md">
              <h2 className="text-3xl font-semibold text-white">Contact Us</h2>
              <p className="text-lg">
                We’d love to hear from you! Contact us via email or phone, or
                visit our office in Abuja.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 p-3 bg-black/40 rounded-md cursor-pointer hover:translate-y-1 transition-transform">
                  <Icon icon={email} className="w-6 h-6 text-white" />
                  <p className="text-white">info@odernixhomes.com</p>
                </div>
                <div className="flex items-center gap-2 p-3 bg-black/40 rounded-md cursor-pointer hover:translate-y-1 transition-transform">
                  <Icon icon={phoneIcon} className="w-6 h-6 text-white" />
                  <p className="text-white">+234 (0)912 899 9972</p>
                </div>
                <div className="flex items-center gap-2 p-3 bg-black/40 rounded-md cursor-pointer hover:translate-y-1 transition-transform">
                  <Icon icon={locationIcon} className="w-6 h-6 text-white" />
                  <p className="text-white">
                    A4, 29b N’djamena Crescent, Wuse 2, Abuja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
