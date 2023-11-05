"use client";
import React from 'react';

import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import Link from "next/link";
import {GiHamburgerMenu} from "react-icons/gi";
import "./nav.css"
import Image from "next/image";
import logo from '../../../public/logo-white-slim.png';
import {useRouter} from "next/navigation";
import {comorant_garamond, montserrat} from "@/utils/fonts";
import {AiOutlineClose} from "react-icons/ai";
import Contacts from "@/component/contact/contacts";

interface navigate {
    style: any;
}
export default function Nav({style}:navigate) {
    const [openNav, setOpenNav] = useState(false);
    // useEffect(() => {
    //     dispatch(fetchAllComics())
    // }, [])
    const router = useRouter()
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navigation = [
        { name: 'Home', href: '/home' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Services', href: '/services' },
    ]

    return (
        <div className={montserrat.className}>
            <div className={``} style={style}>
                <div className="mx-auto container flex justify-between items-center py-6 px-3 md:py-0 md:px-0">
                <div className={`alignCenter logo_main`}>
                        <Link href="/" className="site-title">
                            <Image src={logo} alt={''}/>
                        </Link>
                    </div>
                    <div className={` alignCenter`}>
                        <GiHamburgerMenu className={`cursor-pointer hamburger-menu text-white text-2xl text-sub`}
                                         onClick={() => setOpenNav(!openNav)}/>
                    </div>

                    <div className={`hidden md:flex`}>
                        <div className={`flex gap-2 alignCenter items-center border-l-2 border-white backdrop-blur-sm bg-white/30`}>
                            <div className={`alignCenter px-5`}>
                                <Link href='/contact'>
                                    <p className={`text-white text-xl cursor-pointer`}>Contact</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {openNav &&
                        <div className={` text-white bg-black h-screen w-full fixed top-0 left-0 duration-500 ease-in-out transition-transform 
                        ${
                        openNav ? "translate-y-0 " : "translate-y-full"
                    }
                        `}>
                            <div className={`relative`}>
                                <div className={`absolute bg-main h-screen top-0 left-0 w-full`}>
                                    <div className={`flex`}>
                                        <div className={`bg-main h-screen md:w-6/12`}>
                                            <div className={`flex bg-orange-400`}>
                                                <div className={``}>

                                                </div>
                                            </div>
                                        </div>
                                        <div  style={{
                                            backgroundImage: `url('/pattern.png')`, // Use the image variable here
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            mixBlendMode: 'color-dodge',
                                            opacity: '0.2',
                                        }}
                                              className="absolute w-auto md:w-6/12 md:min-w-50 md:right-0 h-screen md:min-h-full max-w-none">
                                            {/*<Image src={`/img2.png`} width={100} height={100} alt="" className="h-full w-full object-cover" />*/}
                                        </div>
                                    </div>
                                </div>
                                <div className={`container mx-auto z-50 flex flex-col justify-between h-screen`}>
                                    <div className={`w-full flex justify-between items-center py-6 px-3 md:py-0 md:px-0`}>
                                        <div className={`alignCenter logo_main backdrop-blur-sm`}>
                                            <Link href="/" className="site-title">
                                                <Image src={logo} alt={''}/>
                                            </Link>
                                        </div>
                                        <div className={` md:flex`}>
                                        <div className={` backdrop-blur-sm `}>
                                            <p onClick={() => setOpenNav(!openNav)}
                                                className={`cursor-pointer text-xl flex items-center gap-2`}>
                                                Close <AiOutlineClose/>
                                            </p>
                                        </div>
                                    </div>

                                        <div className={` md:flex`}>
                                            <div className={`flex gap-2 alignCenter items-center border-l-2 border-white backdrop-blur-sm bg-white/30`}>
                                                <div className={`alignCenter px-5`}>
                                                    <Link href='/contact' onClick={() => setOpenNav(!openNav)}>
                                                        <p className={`text-white text-xl cursor-pointer`}>Contact</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className={`flex `}>
                                        <div className={``}>

                                            <ul className={`flex flex-col w-full gap-5 md:gap-7 md:text-7xl text-2xl md:text-8xl backdrop-blur-sm`}>
                                                {navigation.map((item, index) => (
                                                    <div key={item.name} className={`my-6`}>
                                                        <div className={comorant_garamond.className}>
                                                        <Link href={item.href} onClick={() => setOpenNav(!openNav)}>
                                                            {item.name}
                                                        </Link>
                                                        </div>


                                                    </div>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="pb-2 md:pb-10 backdrop-blur-sm">
                                        <Contacts/>
                                    </div>
                                </div>
                            </div>



                    </div>}
                </div>
            </div>
        </div>
    );
}