"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {comorant_garamond, montserrat} from "@/utils/fonts";
import Map from "@/component/map/map";
import {Icon} from "@iconify/react";
import email from "@iconify/icons-mdi/email";
import phoneIcon from "@iconify/icons-mdi/phone";
import locationIcon from "@iconify/icons-mdi/map-marker";
import NextNProgress from "nextjs-progressbar";

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playVideo, setPlayVideo] = useState(false)
    const onClick = () => setPlayVideo(true)


    useLayoutEffect(() => {
        if (videoRef.current) videoRef.current.play()
    }, [playVideo])
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }
    return (
        <div>
            <NextNProgress color={`#321a3f`}/>
            <ul className="grid_lines w-full flex absolute z-30 justify-between">
                <li className="grid_line"></li>
                <li className="grid_line"></li>
                <li className="grid_line"></li>
                <li className="grid_line"></li>
                <li className="grid_line"></li>
            </ul>
            <section className=" relative flex items-center justify-center overflow-hidden h-screen">
                <div className="relative h-full w-full z-30 p-5  text-white main-gradient2 bg-opacity-50">
                    <div className="flex flex-col md:flex-row h-full container z-20 mx-auto relative">
                        <div className="md:w-7/12 h-full flex flex-col justify-end">

                            <div className="text-2xl">
                                Contact us
                            </div>
                            <div className="flex flex-col py-8 items-start pb-2 md:pb-10" >
                                <div className={comorant_garamond.className}>
                                    <h1 className="home_main_text">
                                        Say Hello
                                    </h1>
                                </div>
                            </div>

                        </div>
                        <div className=" md:w-5/12 h-full flex flex-col justify-end items-end">
                            <div className={""}>
                                <div className={montserrat.className}>
                                    <div className={`items-center border-l-2 border-white flex-col w-80 backdrop-blur-sm bg-black/30 z-60`}>
                                        <p className={`text-lg p-5 text-white`}>We&lsquo;d be delighted to talk, so please do get in touch. Send us an email,
                                            or better still come and meet us at our office in Abuja.</p>
                                        <div className={`flex items-center gap-2 px-5 py-2 hover:translate-y-1 cursor-pointer transition ease-in delay-500 transform`}>
                                            <Icon icon={email} className="w-10" />
                                            <p className={`border-b hover:border-b-2`}>info@odernixhomes.com</p>
                                        </div>
                                        <div className={`flex items-center gap-2 px-5 py-2 hover:translate-y-1 cursor-pointer transition ease-in delay-500 transform`}>
                                            <Icon icon={phoneIcon} className="w-10" />
                                            <p className={`border-b hover:border-b-2`}>+234 (0)912 899 9972</p>
                                        </div>
                                        <div className={`flex items-center gap-2 px-5 py-2 hover:translate-y-1 cursor-pointer transition ease-in delay-500 transform`}>
                                            <Icon icon={locationIcon} className="w-10" />
                                            <p className={`border-b hover:border-b-2`}>info@odernixhomes.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute w-auto min-w-full md:min-w-50 md:right-0 min-h-full max-w-none"
                >
                    <Map location={location} zoomLevel={17} height={`min-h-screen`}/>
                </div>

            </section>
        </div>
    )
}
