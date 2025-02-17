"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { comorant_garamond, montserrat, montserrat_bold } from "@/utils/fonts";
import img2 from "../../../../public/img2.png";
import img3 from "../../../../public/img3.png";
import img4 from "../../../../public/img4.png";
import { BsArrowRight } from "react-icons/bs";
import { Parallax } from "react-scroll-parallax";
import logo3 from "../../../../public/logo-s-white.png";
import WithScrollbar from "@/component/carousel/withScroll";
/* import Map from "@/component/map/map"; */
import dynamic from "next/dynamic";
import ProjectData from "@/server-actions/projects.json";
import NextNProgress from "nextjs-progressbar";

const ParallaxProvider = dynamic(() => import("../../ParallaxProvider"), {
  ssr: false,
});

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
const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/flagged/photo-1556091766-9b818bc73fad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
];
function Terreza({ params }: any) {
  const data = ProjectData.ProjectData;
  const [project, setProject] = React.useState<any>([]);
  console.log(project.name);
  useEffect(() => {
    data.find((item: any) => {
      if (item.slug === params.slug) {
        console.log(item);
        setProject(item);
      }
    });
  }, []);
  const location = {
    address: project.address,
    lat: project.lat,
    lng: project.lng,
  };
  function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
      return text;
    } else {
      // Truncate the text and add ellipses
      return text.slice(0, maxLength) + "...";
    }
  }
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
          <div className="relative h-full w-full z-30 text-white bg-main bg-opacity-50">
            <div className="flex flex-col md:flex-row h-full container w-full items-center md:justify-between z-20 mx-auto relative text-white ">
              <div className={comorant_garamond.className}>
                <div className={``}></div>
                <Parallax speed={15}>
                  <div className={`flex justify-between`}>
                    <div>
                      <h1 className="text-2xl md:text-3xl mb-5 mt-52 md:mt-64">
                        {project.address}
                      </h1>
                      <h1 className="text-5xl md:text-7xl ">{project.name}</h1>
                      <h1 className="text-2xl md:text-3xl">{project.sub}</h1>
                    </div>
                  </div>
                </Parallax>
              </div>
              <Link href={"/contact"}>
                <div
                  className={`items-center border-l-2 border-white flex md:mt-10 backdrop-blur-sm bg-white/30`}
                >
                  <div className={montserrat.className}>
                    <p className={`text-lg px-5 pr-20 text-white`}>
                      Contact us
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
          </div>
        </section>

        <section className=" relative flex items-center justify-center overflow-hidden h-screen-75 md:h-screen">
          <Parallax scale={[1, 2]}>
            <div
              className={`relative flex items-center w-screen justify-center overflow-hidden h-screen-75 md:h-screen`}
            >
              <div className="relative h-full w-full z-30 p-5  text-white main-gradient-alter bg-opacity-50">
                <div className={`flex justify-center items-center h-full`}>
                  <Parallax translateY={[-20, 100]}>
                    <Image src={logo3} alt="" className={`w-36 opacity-10`} />
                  </Parallax>
                </div>
              </div>

              <div
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="absolute w-auto min-w-full md:min-w-50 md:right-0 h-screen-75 md:min-h-full max-w-none"
              >
                {/*<Image src={`/img2.png`} width={100} height={100} alt="" className="h-full w-full object-cover" />*/}
              </div>
            </div>
          </Parallax>
        </section>
        <section className=" relative flex flex-col items-center justify-center overflow-hidden ">
          <div className="relative h-full w-full z-30 py-10 bg-opacity-50">
            <div className="flex flex-col h-125 px-3 md:px-0 md:flex-row h-full container z-20 mx-auto relative">
              <div className={`flex flex-col`}>
                <div className="h-full flex w-full ">
                  <div className="flex flex-col items-start">
                    <div className={comorant_garamond.className}>
                      <Parallax translateX={[-10, 0]}>
                        <h1 className="text-5xl md:text-12xl text_main_color">
                          Elegance
                        </h1>
                      </Parallax>
                      <Parallax translateX={[10, 0]}>
                        <h1 className="text-5xl md:text-12xl text_main_color">
                          and Comfort
                        </h1>
                      </Parallax>
                    </div>
                  </div>
                  <Image src={logo3} alt="" className={`w-72 opacity-5`} />
                </div>
                <div className=" h-full flex justify-end w-full">
                  <div className={``}></div>
                  <div className={`md:w-6/12`}>
                    <div className={montserrat.className}>
                      <Parallax speed={10}>
                        <div className="container mx-auto ">
                          <p className={`text-xl`}>{project.description}</p>
                        </div>
                      </Parallax>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`relative items-center justify-center overflow-hidden`}
        >
          <WithScrollbar images={project.gallery} />
        </section>
        <section className=" relative flex flex-col items-center justify-center overflow-hidden bg-main mt-40">
          <div className="flex flex-col justify-center items-center relative h-full w-full z-30 py-20 md:py-32 bg-opacity-50">
            <div className={`grid md:grid-cols-3 gap-4 md:w-10/12`}>
              <div
                className={`shadow-xl p-5 bg-main-alt text-white transform transition cursor-pointer delay-100 duration-1000 ease-in-out hover:scale-105 hover:bg-main-alt2`}
              >
                <div className={montserrat_bold.className}>
                  <p className={`text-2xl font-bold capitalize text-gray-400`}>
                    Location
                  </p>
                </div>
                <div className={montserrat.className}>
                  <p className={`text-3xl pb-5`}>{project.address}</p>
                </div>
              </div>
              <div
                className={`shadow-xl p-5 bg-main-alt text-white transform transition cursor-pointer delay-100 duration-1000 ease-in-out hover:scale-105 hover:bg-main-alt2`}
              >
                <div className={montserrat_bold.className}>
                  <p className={`text-2xl font-bold capitalize text-gray-400`}>
                    Delivery
                  </p>
                </div>
                <div className={montserrat.className}>
                  <p className={`text-3xl pb-5`}>{project.deliveryDate}</p>
                </div>
              </div>
              <div
                className={`shadow-xl p-5 bg-main-alt text-white transform transition cursor-pointer delay-100 duration-1000 ease-in-out hover:scale-105 hover:bg-main-alt2`}
              >
                <div className={montserrat_bold.className}>
                  <p className={`text-2xl font-bold capitalize text-gray-400`}>
                    Number of housing
                  </p>
                </div>
                <div className={montserrat.className}>
                  <p className={`text-3xl pb-5`}>{project.propertyNumber}</p>
                </div>
              </div>
              <div
                className={`shadow-xl p-5 bg-main-alt text-white transform transition cursor-pointer delay-100 duration-1000 ease-in-out hover:scale-105 hover:bg-main-alt2`}
              >
                <div className={montserrat_bold.className}>
                  <p className={`text-2xl font-bold capitalize text-gray-400`}>
                    House types
                  </p>
                </div>
                <div className={montserrat.className}>
                  <p className={`text-3xl pb-5`}>{project.projectType}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col px-3 md:w-10/12 md:flex-row h-full gap-20 items-center text-white mt-20 z-20 relative">
              <div className="md:w-6/12  h-full flex flex-col justify-between">
                <Parallax speed={10}>
                  <div className="flex flex-col items-start">
                    <div className={comorant_garamond.className}>
                      <h1 className="text-5xl md:text-7xl mb-4">
                        The Project
                        <br />
                        in Details
                      </h1>
                    </div>
                    <div className={montserrat.className}>
                      <p className={` pb-5 leading-8`}>
                        {project.projectDetails}
                      </p>
                    </div>
                    <Link href={"/odernix-homes-brochure.pdf"}>
                      <div
                        className={`items-center border-l-2 border-white flex mt-10 backdrop-blur-sm bg-white/30`}
                      >
                        <div className={montserrat.className}>
                          <p className={`text-lg px-5 pr-40 text-white`}>
                            Download Brochure
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
                </Parallax>
              </div>
              <div className=" h-full justify-end w-full md:w-6/12">
                {/*  <Map location={location} zoomLevel={17} height={`80vh`} /> */}
              </div>
            </div>
          </div>
        </section>
        <section className="relative flex flex-col justify-center items-center overflow-hidden mt-20">
          <div className="h-full flex w-full md:w-10/12">
            <div className="flex flex-col items-start ">
              <div className={comorant_garamond.className}>
                <Parallax translateX={[-10, 0]}>
                  <h1 className="text-5xl md:text-12xl text_main_color">
                    More
                  </h1>
                </Parallax>
                <Parallax translateX={[10, 0]}>
                  <h1 className="text-5xl md:text-12xl text_main_color">
                    From Us
                  </h1>
                </Parallax>
              </div>
            </div>
            <Image src={logo3} alt="" className={`md:w-72 w-52 opacity-5`} />
          </div>
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-3 px-3 md:px-0 mx-auto container mb-20 pb-20 border-black`}
          >
            {ProjectData.ProjectData.slice(0, 3).map((item, index) => (
              <div key={item.id}>
                <Link href={`project/${item.slug}`}>
                  <div className={`flex flex-col h-125 relative`}>
                    <div className="container mx-auto h-125">
                      <div
                        style={{
                          backgroundImage: `url('${item.image}')`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                        className="absolute min-w-full md:min-w-50 h-full w-full object-cover"
                      ></div>
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
                          <div className={`flex gap-4`}></div>
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

export default Terreza;
