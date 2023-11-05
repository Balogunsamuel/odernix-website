"use client";

import React from 'react';
import * as url from "url";
import Link from "next/link";
import Image from "next/image";
import {Bodoni_Moda, Montserrat} from 'next/font/google';
import {comorant_garamond, inter, montserrat, montserrat_bold} from "@/utils/fonts";
import { motion } from 'framer-motion';
import img1 from '../../public/img1.png';
import img2 from '../../../public/bastion.jpg';
import img3 from '../../../public/bastion2.jpg';
import img4 from '../../../public/terraza.jpg';
import {Parallax} from "react-scroll-parallax";
import logo3 from "../../../public/logo-s-white.png";
import dynamic from 'next/dynamic';
import ProjectData from "@/server-actions/projects.json";
import NextNProgress from "nextjs-progressbar";

const ParallaxProvider = dynamic( () => import('../ParallaxProvider'), { ssr: false } );

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

async function Projects(props: {}) {
    const [projects, setProjects] = React.useState<ProjectDataProp[]>([]);
    console.log(ProjectData)
    function truncateText(text: string, maxLength: number) {
        if (text.length <= maxLength) {
            return text;
        } else {
            // Truncate the text and add ellipses
            return text.slice(0, maxLength) + '...';
        }
    }
    return (
        <div>
            <NextNProgress color={`#321a3f`}/>
            <ParallaxProvider>
                {/*<ul className="grid_lines w-full flex absolute z-50 justify-between">*/}
                {/*    <li className="grid_line"></li>*/}
                {/*    <li className="grid_line"></li>*/}
                {/*    <li className="grid_line"></li>*/}
                {/*    <li className="grid_line"></li>*/}
                {/*    <li className="grid_line"></li>*/}
                {/*</ul>*/}
                <section className=" relative flex flex-col items-center justify-center overflow-hidden ">
                    <div className="relative h-full w-full z-30  text-2xl text-white bg-main bg-opacity-50">
                        <div className="flex flex-row mt-20 h-full container z-20 mx-auto relative">

                        </div>
                    </div>


                </section>
                <section className=" relative flex flex-col items-center justify-center overflow-hidden ">
                    <div className="relative h-full w-full z-30 py-20 md:py-32 bg-opacity-50">
                        <div className="flex flex-col px-3 md:px-0 md:flex-row h-full container z-20 mx-auto relative">
                            <div className="md:w-7/12  h-full flex flex-col justify-between">
                                <div className="text-xl text-center">
                                </div>
                                <div className="flex flex-col items-start">
                                    <div className={comorant_garamond.className}>
                                        <h1 className="text-5xl md:text-7xl text_main_color">
                                            Our Projects
                                        </h1>
                                    </div>
                                    <div className={montserrat.className}>
                                        <div className={`pt-5 lg:w-10/12`}>
                                            We invest across Nigeria,
                                            focusing on Locations where our team has experience and where
                                            there is scope to aggregate assets in our target sectors.
                                            Wherever we invest, we partner with highly skilled management teams to build
                                            leading real estate businesses.
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className=" h-full flex justify-end w-full md:w-5/12">
                                <div className={`absolute right-0 top-20`}>
                                    <Image src={logo3} alt="" className={`w-72 opacity-10`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative flex flex-col items-center justify-center overflow-hidden">
                    <div
                        className={`grid grid-cols-1 md:grid-cols-2 gap-3 px-3 md:px-0 mx-auto container mb-20 pb-20 border-black`}>
                        {ProjectData.ProjectData.map((item, index) => (
                            <div key={item.id}>
                                <Link href={`project/${item.slug}`}>
                                    <div className={`flex flex-col h-125 relative`}>
                                        <div className="container mx-auto h-125">
                                            <div  style={{
                                                backgroundImage: `url('${item.image}')`, // Use the image variable here
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                            }}
                                                  className="absolute min-w-full md:min-w-50 h-full w-full object-cover">
                                                {/*<Image src={`/img2.png`} width={100} height={100} alt="" className="h-full w-full object-cover" />*/}
                                            </div>
                                        </div>
                                        <div className="relative h-125 w-full z-30 p-5 text-white main-gradient-alternate bg-opacity-50">
                                            <div className={`h-125 flex flex-col justify-end -mt-10`}>
                                                <div className={montserrat.className}>
                                                    <p className={`font-bold text-4xl`}>0{index + 1}</p>
                                                    <div className={comorant_garamond.className}>
                                                        <h1 className="text-xl md:text-5xl py-3">
                                                            {item.name}
                                                        </h1>
                                                    </div>
                                                    <p className={``}>
                                                        {truncateText(item.description, 50)}
                                                    </p>
                                                    <div className={`flex gap-4`}>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

            </ParallaxProvider>
        </div>
    );
}

export default Projects;