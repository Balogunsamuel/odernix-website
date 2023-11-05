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
const resources = [
    {
        title: "Human Resources",
        description: "We Excel In Our Services Because We Ensure That All Our Operations And Management Personnel Are Reliable, Qualified And Competent\n" +
            "This Enhances Good Performance And Standard Workmanship"
    },
    {
        title: "Recruitments",
        description: "Our recruitment policy is open and at the same time focused, we know what we want and we go for it, our objectives never change, which is to deliver top quality service in a lean and efficient way"
    },
    {
        title: "Training",
        description: "A high premium is also attached to the training of all categories of our personnel to keep them abreast with improved technological techniques and skill as well as construction (material and equipment) products."
    },
    {
        title: "Experience",
        description: "Our institutional working experience in the Construction Sector spans over a ten (10) year period. It is collective and practicable. Rainbow Heritage also participates frequently in joint venture constructions in multiple markets"
    },
    {
        title: "Infrastructure",
        description: "Rainbow Heritage Projects Service Limited owns, maintains and operates basic operational infrastructure e.g. Jetty, mobile site offices, warehouses and workshops and yards with accompanying utilities."
    },
    {
        title: "Equipment",
        description: "Our Reliance and utilization of innovative state-of-the art construction tools and equipment enables us invest in quality equipment and tools by outright purchase, lease or hire depending on the prevailing economic advantage."
    }
]
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
                                        Our Services
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
            <section className={`min-h-screen-75 relative  `}>
                <div className={`container mx-auto min-h-screen-75 pb-20 px-2 md:px-0`}>
                    <div className={`flex flex-col justify-center h-full mt-10`}>
                        <div className={`grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mt-20 gap-7 md:gap-16`}>
                            {resources.map((resource, index) => (
                                <div
                                    key={index}
                                    className={`h-96 border flex flex-col justify-center items-center relative border-main bg-white hover:shadow-2xl cursor-pointer transition delay-150 mt-10`}
                                >
                                    <div className={`rounded-full flex items-center justify-center absolute -mt-9 top-0 bg-main p-3 h-16 w-16 text-white`}>
                                        <p className={`items-center font-semibold text-xl`}>
                                            {index + 1}
                                        </p>
                                    </div>
                                    <div className={`flex flex-col h-full justify-center items-center px-10 md:px-16 text-lg`}>
                                        <p className={`font-semibold text-xl self-start pb-5`}>{resource.title}</p>
                                        <p>{resource.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </ParallaxProvider>
        </div>
    );
}

export default Projects;