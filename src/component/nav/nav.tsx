"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Building2,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Award,
  ExternalLink,
  BookOpen,
  Star,
  ArrowRight,
} from "lucide-react";
import logo from "../../../public/logo-white-slim.png";
import logoDark from "../../../public/logo-s-dark.png";
import { montserrat, comorant_garamond } from "@/utils/fonts";
import Contacts from "@/component/contact/contacts";
import "./nav.css";

interface NavProps {
  variant?: "light" | "dark";
  transparent?: boolean;
  style?: React.CSSProperties;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  dropdown?: DropdownItem[];
}

interface DropdownItem {
  label: string;
  href: string;
}

const Nav: React.FC<NavProps> = ({
  variant = "dark",
  transparent = false,
  style,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Navigation items configuration
  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      label: "About",
      href: "/about",
      icon: Users,
    },
    {
      label: "Services",
      href: "/services",
      icon: Briefcase,
      /*  dropdown: [
        { label: "Real Estate Development", href: "/services#real-estate" },
        { label: "Engineering Services", href: "/services#engineering" },
        { label: "Investment Solutions", href: "/services#investment" },
        { label: "Consultancy", href: "/services#consultancy" },
        { label: "Innovation & Technology", href: "/services#innovation" },
      ], */
    },
    {
      label: "Projects",
      href: "/projects",
      icon: Building2,
      /* dropdown: [
        { label: "All Projects", href: "/projects" },
        { label: "The Bastion", href: "/project/the-bastion" },
        { label: "The Terraza", href: "/project/terraza" },
        { label: "Residential", href: "/projects?filter=residential" },
        { label: "Commercial", href: "/projects?filter=commercial" },
      ], */
    },
    {
      label: "Blog",
      href: "/blog",
      icon: BookOpen,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: MessageSquare,
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if route is active
  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Get navigation style classes
  const getNavClasses = (): string => {
    let classes = "odernix-nav";

    if (transparent && !isScrolled) {
      classes += " nav-transparent";
    } else if (isScrolled) {
      classes += " nav-scrolled";
    } else if (variant === "light") {
      classes += " nav-light";
    } else {
      classes += " nav-dark";
    }

    return classes;
  };

  // Get text color classes
  const getTextClasses = (): string => {
    if (transparent && !isScrolled && variant === "dark") {
      return "nav-text-transparent";
    }
    return variant === "light" || isScrolled
      ? "nav-text-light"
      : "nav-text-dark";
  };

  // Get logo source
  const getLogoSrc = () => {
    if (transparent && !isScrolled && variant === "dark") {
      return logo;
    }
    return variant === "light" || isScrolled ? logoDark : logo;
  };

  // Handle dropdown mouse events
  const handleDropdownEnter = (itemLabel: string) => {
    const item = navItems.find((nav) => nav.label === itemLabel);
    if (item?.dropdown) {
      setActiveDropdown(itemLabel);
    }
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={getNavClasses()} style={style}>
        <div className="container mx-auto px-5">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src={getLogoSrc()}
                  alt="Odernix Homes"
                  className="nav-logo"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="desktop-nav hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={item.href}
                    className={`nav-link ${
                      isActive(item.href) ? "nav-link-active" : ""
                    } ${getTextClasses()} ${montserrat.className}`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 chevron-down ${
                          activeDropdown === item.label ? "chevron-rotated" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="nav-dropdown"
                        >
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              href={dropdownItem.href}
                              className="nav-dropdown-item"
                            >
                              <span>{dropdownItem.label}</span>
                              <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Info & CTA */}
            <div className="desktop-nav hidden lg:flex items-center space-x-6">
              {/* Contact Info */}
              <div className="flex items-center space-x-4">
                <a
                  href="tel:+2349128999972"
                  className={`nav-contact ${getTextClasses()} ${
                    montserrat.className
                  }`}
                >
                  <Phone className="w-4 h-4" />
                  <span>+234 912 899 9972</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`mobile-menu-btn lg:hidden ${getTextClasses()}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu-overlay lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="mobile-menu-panel mobile-menu-bg-pattern"
            >
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="mobile-menu-header">
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="flex items-center space-x-3"
                  >
                    <Image
                      src={logo}
                      alt="Odernix Homes"
                      className="h-8 w-auto"
                    />
                  </Link>

                  <button
                    onClick={closeMobileMenu}
                    className="mobile-menu-text hover:mobile-menu-text-accent transition-colors p-2"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation */}
                <div className="mobile-menu-content">
                  {/* Badge */}
                  <div className="nav-badge">
                    <Star className="w-3 h-3 mr-1 mobile-menu-text-accent" />
                    <span className="nav-badge-text">Premium Real Estate</span>
                  </div>

                  {/* Menu Items */}
                  <div className="space-y-2 mb-8">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={`mobile-nav-item ${
                            isActive(item.href) ? "active" : ""
                          } ${comorant_garamond.className}`}
                        >
                          <item.icon className="w-6 h-6" />
                          <span>{item.label}</span>
                          {isActive(item.href) && (
                            <ArrowRight className="w-5 h-5 ml-auto" />
                          )}
                        </Link>

                        {/* Mobile Dropdown */}
                        {item.dropdown && (
                          <div className="space-y-1">
                            {item.dropdown.map((dropdownItem, dropIndex) => (
                              <Link
                                key={dropIndex}
                                href={dropdownItem.href}
                                onClick={closeMobileMenu}
                                className="mobile-dropdown-item"
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="mobile-menu-footer">
                  {/* Contact Component */}
                  <div className="pt-6 border-t border-white/10">
                    <Contacts />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20" aria-hidden="true"></div>
    </>
  );
};

export default Nav;
