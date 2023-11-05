"use client";

import React from 'react';
import * as url from "url";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import img1 from '../../../public/frame47.png';
import img2 from '../../../public/bastion.jpg';
import img3 from '../../../public/bastion2.jpg';
import img4 from '../../../public/terraza.jpg';
import img5 from '../../../public/img5.png';
import pattern from '../../public/pattern.png';
import img7 from '../../public/img7.png';
import img8 from '../../../public/img8.png';
import logo from "../../public/logo-white-slim.png";
import logo2 from "../../public/logo-s-dark.png";
import logo3 from "../../../public/logo-s-white.png";
import { Parallax } from 'react-scroll-parallax';
import frame227 from "../../public/frame227.png";
import {comorant_garamond, montserrat, montserrat_bold} from '@/utils/fonts';
import dynamic from 'next/dynamic';
import NextNProgress from "nextjs-progressbar";

const ParallaxProvider = dynamic( () => import('../ParallaxProvider'), { ssr: false } );
function About(props:{}) {
    return (
        <div>

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
                                <div className="flex flex-col items-start" >
                                    <div className={comorant_garamond.className}>
                                        <h1 className="text-5xl md:text-7xl text_main_color">
                                            Discover a place<br/>you&apos;ll love to live
                                        </h1>
                                    </div>

                                </div>

                            </div>
                            <div className=" h-full flex justify-end w-full md:w-5/12">
                                <div className={montserrat.className}>
                                    <div className={`items-center flex `}>
                                        <p className={`text-lg p-5 text_main_color`}>At Odernix Homes, our core values are; Integrity, Confidence, Collaboration and Trust. We are built on these 4 values and that is why we are one of the leading developers in Nigeria.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`container mx-auto h-123`}>
                        <div className=" w-auto min-w-full md:min-w-50 md:right-0 min-h-full max-w-none ">
                            <Image src={img1} alt="" className={`alignCenter h-125 object-cover`}/>
                        </div>
                    </div>


                </section>
                <section className="relative flex flex-col items-center justify-center overflow-hidden">
                    <div className="relative h-full w-full z-30 py-14 md:py-24  pb-10 bg-opacity-50">
                        <div className="flex flex-col px-3 md:px-0 md:flex-row h-full container z-20 mx-auto relative">
                            <div className="md:w-7/12 h-full flex flex-col justify-between">
                                <div className="text-center"></div>
                                <div className="flex flex-col items-start" >
                                    <div className={comorant_garamond.className}>
                                        <h1 className="text-3xl md:text-5xl text_main_color">
                                            New projects<br/>in sale
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className=" h-full flex justify-end md:w-5/12">
                                <div className={montserrat.className}>
                                    <div className={`items-center flex `}>
                                        <p className={`text-lg p-5 text_main_color`}>
                                            Take a deep dive and browse homes for sale,original neighborhood
                                            photos, resident reviews and local insights to find what is right for you
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 px-3 md:px-0 mx-auto container border-b pb-20 border-black`}>
                        <Parallax speed={5}>
                            <div className={`flex flex-col`}>
                                <div className="container mx-auto h-120">
                                    <div className="w-auto min-w-full md:min-w-50 md:right-0 h-full max-w-none">
                                        <Image src={img2} alt="" className="h-full w-full object-cover" />
                                    </div>
                                </div>
                                <div className={comorant_garamond.className}>
                                    <h1 className="text-xl md:text-2xl py-3 text_main_color">
                                        The Bastion
                                    </h1>
                                </div>
                                <div className={montserrat.className}>
                                    <p className={`font-bold text-sm`}>218 Sounth 200 East salt Lake City, Utah 84111</p>
                                </div>
                                <div className={montserrat_bold.className}>
                                    <p className={`font-bold`}>Terraces</p>
                                </div>
                            </div>
                        </Parallax>
                        <Parallax speed={10}>
                            <div className={`flex flex-col`}>
                                <div className="container mx-auto h-120">
                                    <div className="w-auto min-w-full md:min-w-50 md:right-0 h-full max-w-none">
                                        <Image src={img3} alt="" className="h-full w-full object-cover" />
                                    </div>
                                </div>
                                <div className={comorant_garamond.className}>
                                    <h1 className="text-xl md:text-2xl py-3 text_main_color">
                                        The Bastion 2
                                    </h1>
                                </div>
                                <div className={montserrat.className}>
                                    <p className={`font-bold text-sm`}>218 Sounth 200 East salt Lake City, Utah 84111</p>
                                </div>
                                <div className={montserrat_bold.className}>
                                    <p className={`font-bold`}>Terraces</p>
                                </div>
                            </div>
                        </Parallax>
                        <Parallax speed={15}>
                            <div className={`flex flex-col`}>
                                <div className="container mx-auto h-120">
                                    <div className="w-auto min-w-full md:min-w-50 md:right-0 h-full max-w-none">
                                        <Image src={img4} alt="" className="h-full w-full object-cover" />
                                    </div>
                                </div>
                                <div className={comorant_garamond.className}>
                                    <h1 className="text-xl md:text-2xl py-3 text_main_color">
                                        Terraza
                                    </h1>
                                </div>
                                <div className={montserrat.className}>
                                    <p className={`font-bold text-sm`}>218 Sounth 200 East salt Lake City, Utah 84111</p>
                                </div>
                                <div className={montserrat_bold.className}>
                                    <p className={`font-bold`}>Terraces</p>
                                </div>
                            </div>
                        </Parallax>
                    </div>
                </section>

                <section className="relative bg-main flex flex-col items-center w-full h-125 text-white overflow-hidden">
                    <div className={`absolute`}>
                        {/*<Image*/}
                        {/*    src={pattern}*/}
                        {/*    style={{*/}
                        {/*        width: '100%',*/}
                        {/*        height: 'auto',*/}
                        {/*    }}*/}
                        {/*    alt="" />*/}
                    </div>
                    <div className="relative h-full w-full z-30 pt-10 md:pt-30 pb-10 bg-opacity-50">
                        <div className="flex flex-col px-3 md:px-0 md:flex-row  h-full container z-20 mx-auto relative">
                            <div className="md:w-7/12 h-full flex flex-col justify-center">
                                <div className="w-full h-90 md:w-50 md:right-0 flex items-center">
                                    <Image src={img8} alt="" className="alignCenter max-h-90 object-cover" />
                                </div>
                            </div>

                            <div className=" h-full flex flex-col px-3 md:px-10 justify-center md:w-5/12">
                                <Parallax speed={5}>
                                    <div className=" items-start" >
                                        <div className={comorant_garamond.className}>
                                            <h1 className="text-3xl md:text-5xl pt-10 md:pt-0">
                                                <span className={`text-xl`}>Available now </span> The TERRESA
                                            </h1>
                                        </div>
                                    </div>
                                    <div className={montserrat.className}>
                                        <div className={`items-center flex flex-col `}>
                                            <p className={`text-md py-3`}>
                                                Plot 578, 642 and 488, Durumi District, Abuja
                                            </p>
                                            <div className={`mt-5 flex justify-between w-full`}>
                                                <div className={`flex flex-col`}>
                                                    <p>Beds</p>
                                                    <div className={montserrat_bold.className}>
                                                        <p>4</p>
                                                    </div>
                                                </div>
                                                <div className={`flex flex-col`}>
                                                    <p>Bath</p>
                                                    <div className={montserrat_bold.className}>
                                                        <p>3</p>
                                                    </div>
                                                </div>
                                                <div className={`flex flex-col`}>
                                                    <p>Square/feet</p>
                                                    <div className={montserrat_bold.className}>
                                                        <p>924-1024</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className={`text-sm py-3`}>
                                                A 4bedroom semi-detached duplex with a spacious and modern living solution
                                                for families or individuals seeking ample space and privacy. It offers a
                                                unique blend of independence and community living.
                                            </p>
                                        </div>
                                    </div>
                                </Parallax>

                            </div>

                        </div>
                    </div>
                </section>
                <section className={`min-h-screen-75 relative`}>
                    <div className={`absolute right-0 top-20`}>
                        <Image src={logo3} alt="" className={`w-72 opacity-10`}/>
                    </div>
                    <div className={`container mx-auto min-h-screen-75 py-20 px-2 md:px-0`}>
                        <div className={`flex flex-col justify-center h-full mt-10`}>
                            <Parallax speed={11}>
                                <div className={` container mx-auto `}>
                                    <div className="flex flex-col md:flex-row justify-center">
                                        <div className="flex flex-col justify-center lg:w-5/12 px-2">
                                            <div className={comorant_garamond.className}>
                                                <p className={`md:text-4xl px-2  font-bold tracking-normal pb-10`}>
                                                    Creating Affordable Houses for Everyone
                                                </p>
                                            </div>

                                            <div className={montserrat.className}>
                                                <p className={` tracking-normal pb-6 px-2 md:pl-14 font-semibold`}>
                                                    Odernix Homes is the real estate and hospitality arm of Odernix Nigeria Limited. Odernix Nigeria Limited is a locally owned Nigerian Incorporated company that offers Engineering Construction services, Consultancy, Environmental, Project management, and Commercial/Residential real estate developers. Odernix Homes were incorporated for this purpose on 11th November 2022.
                                                </p>
                                                <p className={` tracking-normal pb-6 px-2 `}>
                                                    Introducing Odernix Homes, a dynamic and innovative real estate company that is dedicated to helping clients buy,sell,and rent properties. Our team of experienced real estate professionals is committed to providing exceptional service to our clients, whether they&lsquo;re first-time home buyers, seasoned investors, or landlords.
                                                </p>
                                                <p className={` tracking-normal pb-6 px-2 md:pl-14`}>
                                                    We pride ourselves on our deep knowledge of the local real estate market and our ability to match clients with the perfect property for their needs. With our cutting-edge technology and marketing strategies, we make it easy for clients to find and purchase their dream home. At Odernix Homes,we are committed to making the real estate process as smooth and stress-free as estate process as smooth and stress-free as possible.Contact us today to start your journey to home ownership.
                                                </p>
                                            </div>

                                        </div>
                                        <div className="flex lg:w-5/12 relative">
                                            <div className={`absolute top-1/2 -translate-y-1/2`}>
                                                <div className={`w-8/12 flex items-end`}>
                                                    <Parallax speed={11}>
                                                        <Image src={img1} alt=""/>
                                                    </Parallax>
                                                </div>
                                            </div>
                                            <div className={`w-1/12 flex self-end`}></div>
                                            <div className={`w-11/12 flex self-end`}>
                                                <Image src={img5} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </section>

                {/*<section className="relative flex flex-col items-center justify-center overflow-hidden">*/}
                {/*    <div className="relative h-full w-full z-30 pt-10 md:pt-30 pb-10 bg-opacity-50">*/}
                {/*        <div className=" items-start  pb-10" >*/}
                {/*            <div className={comorant_garamond.className}>*/}
                {/*                <h1 className="text-4xl md:text-6xl text-center text_main_color pt-10 md:pt-0">*/}
                {/*                    Articles*/}
                {/*                </h1>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="flex flex-col px-3 md:px-0 md:flex-row  h-full container z-20 mx-auto relative">*/}
                {/*             <div className={montserrat.className}>*/}
                {/*                  <div className={`items-center flex flex-col  border-b border-t border-form`}>*/}
                {/*                      <p className={`text-sm text_main_color py-3`}>*/}
                {/*                            t of variance as a single variable is worth keeping.*/}
                {/*                        </p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </ParallaxProvider>
        </div>

    );
}

export default About;