import React from 'react';

import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/logo-white-slim.png';
import img8 from "../../../public/img8.png";
import logo2 from "../../../public/logo-s-dark.png";
import frame227 from "../../../public/frame227.png";
import {montserrat} from "@/utils/fonts";

React.useLayoutEffect = React.useEffect
interface navigate {
    style: any;
}
export default function Footer() {

    return (
        <footer className="bg-white h-125 relative flex">

            <div className={`absolute right-0`}>
                <div className={`flex justify-between`}>
                    <div className={` md:w-4/12 `}>

                    </div>
                    <div className="md:w-9/12 flex flex-col justify-between">
                        <div className="w-full md:w-50 md:right-0 flex justify-center items-center alignCenter h-125"
                             style={{ backgroundImage: `url(${img8})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <Image src={frame227} alt="" className="alignCenter h-125 object-cover backdrop-filter backdrop-grayscale" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute left-0 bottom-0 w-full">
                <div className="flex flex-col">
                    <div className="flex justify-between relative items-end">
                        <div className="md:w-10/12 bg-main mx-auto container w-full py-16 px-8 ">
                            <div className={`flex flex-col md:flex-row w-full`}>
                                <div className=" py-6 px-3 md:py-0 md:px-0">
                                    <div className="alignCenter logo_main">
                                        <Link href="/" className="site-title">
                                            <Image src={logo2} alt={''} className={`w-24 px-5 `}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className={montserrat.className}></div>
                                    <div className={`text-white w-full px-12`}>
                                        <div className={montserrat.className}>
                                            <p className={``}>ODERNIX HOMES</p>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 justify-between gap-4 mt-12 text-xl text-white font-bold w-full">
                                            <div className={montserrat.className}>
                                                <div className={`flex flex-col gap-2`}>
                                                    <Link href="/">PROJECTS</Link>
                                                    <Link href="/">PROCESS</Link>
                                                    <Link href="/">ABOUT US</Link>
                                                </div>
                                            </div>
                                            <div className={montserrat.className}>
                                                <div className={`flex flex-col gap-2`}>
                                                    <Link href="/">PROJECTS</Link>
                                                    <Link href="/">+2348109048411</Link>
                                                    <Link href="/">ABUJA, NIGERIA</Link>
                                                </div>
                                            </div>
                                            <div className={montserrat.className}>
                                                <div className={`flex flex-col gap-2`}>
                                                    <Link href="/">INSTAGRAM</Link>
                                                    <Link href="/">FACEBOOK</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={montserrat.className}>
                                            <p className={`mt-10 text-sm`}>© All rights reserved to Odernix home  | <Link href="/" className={`underline`}>Privacy policy</Link> | <Link href="/" className={`underline`}>Terms & conditions</Link> |</p>
                                            <p className={`py-5 text-xl`}>Real Estate and Management</p>
                                            <p className={`mt-10 text-sm`}> Designed by <Link href="/" className={`underline`}> Vedie Studio</Link> </p>
                                        </div>

                                    </div>


                            </div>
                        </div>
                        <div className="md:w-3/12 flex flex-col justify-between"></div>
                    </div>
                </div>
            </div>

        </footer>
    );
}