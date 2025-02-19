"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../../public/logo-white-slim.png";
import Contacts from "@/component/contact/contacts";
import { montserrat, comorant_garamond } from "@/utils/fonts";

interface NavProps {
  style?: React.CSSProperties;
}

const Nav: React.FC<NavProps> = ({ style }) => {
  const [openNav, setOpenNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigation = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={`bg-transparent fixed w-full top-0 z-50 ${montserrat.className}`}
      style={style}
    >
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={150} height={50} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <div className={`items-center border-l-2  flex w-64 px-3 py-2 `}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-lg hover:text-gray-300 transition-all
             border-white py-2 pr-4 pl-4 w-full text-center backdrop-blur-sm bg-white/30"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpenNav(true)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {openNav && (
        <div
          className={` text-white bg-black h-screen w-full fixed top-0 left-0 duration-500 ease-in-out transition-transform 
        ${openNav ? "translate-y-0 " : "translate-y-full"}`}
        >
          <div className={`relative`}>
            <div className={`absolute bg-main h-screen top-0 left-0 w-full`}>
              <div className={`flex`}>
                <div className={`bg-main h-screen md:w-6/12`}>
                  <div className={`flex bg-orange-400`}></div>
                </div>
                <div
                  style={{
                    backgroundImage: `url('/pattern.png')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    mixBlendMode: "color-dodge",
                    opacity: "0.2",
                  }}
                  className="absolute w-auto md:w-6/12 md:min-w-50 md:right-0 h-screen md:min-h-full max-w-none"
                ></div>
              </div>
            </div>
            <div
              className={`container mx-auto z-50 flex flex-col justify-between h-screen`}
            >
              <div
                className={`w-full flex justify-between items-center py-6 px-3 md:py-0 md:px-0`}
              >
                <div className={`alignCenter logo_main backdrop-blur-sm`}>
                  <Link href="/" className="site-title">
                    <Image src={logo} alt={""} />
                  </Link>
                </div>
                <div className={`md:flex`}>
                  <div className={`backdrop-blur-sm`}>
                    <p
                      onClick={() => setOpenNav(!openNav)}
                      className={`cursor-pointer text-xl flex items-center gap-2`}
                    >
                      Close <AiOutlineClose />
                    </p>
                  </div>
                </div>
                <div className={`hidden md:flex`}>
                  <div
                    className={`flex gap-2 alignCenter items-center border-l-2 border-white backdrop-blur-sm bg-white/30`}
                  >
                    <div className={`alignCenter px-5`}>
                      <Link
                        href="/contact"
                        onClick={() => setOpenNav(!openNav)}
                      >
                        <p className={`text-white text-xl cursor-pointer`}>
                          Contact
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`flex`}>
                <div>
                  <ul
                    className={`flex flex-col w-full gap-5 md:gap-7 px-5 md:px-0 text-5xl md:text-8xl backdrop-blur-sm`}
                  >
                    {navigation.map((item) => (
                      <div key={item.name} className={`my-6`}>
                        <div className={comorant_garamond.className}>
                          <Link
                            href={item.href}
                            onClick={() => setOpenNav(!openNav)}
                          >
                            {item.name}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pb-2 md:pb-10 backdrop-blur-sm">
                <Contacts />
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
