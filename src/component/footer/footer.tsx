"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Building2,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Award,
  Star,
  Heart,
  Send,
} from "lucide-react";
import logo from "../../../public/logo-white-slim.png";
import logo2 from "../../../public/logo-s-dark.png";
import { montserrat, comorant_garamond } from "@/utils/fonts";

export default function Footer() {
  const [email, setEmail] = React.useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const navigationLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About Us", href: "/about", icon: Users },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Projects", href: "/projects", icon: Building2 },
    { name: "Blog", href: "/blog", icon: MessageSquare },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  const services = [
    "Real Estate Development",
    "Engineering Services",
    "Investment Solutions",
    "Expert Consultancy",
    "Innovation & Technology",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/odernixhomes/",
      icon: Instagram,
      color: "hover:text-pink-500",
      bgColor: "group-hover:bg-pink-500",
    },
    {
      name: "Facebook",
      href: "https://m.facebook.com/profile.php/?id=61552290001830&name=xhp_nt__fb__action__open_user",
      icon: Facebook,
      color: "hover:text-blue-600",
      bgColor: "group-hover:bg-blue-600",
    },
    {
      name: "Twitter",
      href: "https://x.com/odernixhomes/status/1697532380557283552?s=46&t=gb-U55UG8h08BivbQobz1w",
      icon: Twitter,
      color: "hover:text-gray-900",
      bgColor: "group-hover:bg-gray-900",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@OdernixHomes",
      icon: Youtube,
      color: "hover:text-red-600",
      bgColor: "group-hover:bg-red-600",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/odernixhomes",
      icon: Linkedin,
      color: "hover:text-blue-700",
      bgColor: "group-hover:bg-blue-700",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-500/10 to-orange-500/10"></div>
      </div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-orange-500/5 rounded-full blur-2xl"></div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="container mx-auto px-5 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <Link href="/" className="inline-block mb-6">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={logo}
                      alt="Odernix Homes"
                      className="h-12 w-auto"
                    />
                    {/* <div className={montserrat.className}>
                      <span className="text-2xl font-bold block">ODERNIX</span>
                      <span className="text-sm text-amber-400 font-medium">
                        HOMES
                      </span>
                    </div> */}
                  </div>
                </Link>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Transforming Real Estate Through Engineering Excellence,
                  Expert Consultancy, and Innovation in Nigeria's Capital City.
                </p>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-amber-400 mb-1">
                      4+
                    </div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-amber-400 mb-1">
                      50+
                    </div>
                    <div className="text-xs text-gray-400">Clients</div>
                  </div>
                </div>

                {/* Awards */}
                <div className="flex items-center text-amber-400 mb-6">
                  <Award className="w-5 h-5 mr-2" />
                  <span className="text-sm">Licensed & Regulated</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Building2 className="w-5 h-5 mr-2 text-amber-400" />
                  Quick Links
                </h3>
                <div className="space-y-3">
                  {navigationLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group"
                    >
                      <link.icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-amber-400" />
                  Our Services
                </h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300 group cursor-pointer"
                    >
                      <ArrowRight className="w-4 h-4 mr-3 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact & Newsletter */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-amber-400" />
                  Stay Connected
                </h3>

                {/* Contact Info */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-amber-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        A4, 29b N'Djamena Crescent,
                        <br />
                        Wuse 2, Abuja, Nigeria
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:+2349128999972"
                    className="flex items-center text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-3 text-amber-400" />
                    <span className="text-sm">+234 912 899 9972</span>
                  </a>

                  <a
                    href="mailto:info@odernixhomes.com"
                    className="flex items-center text-gray-300 hover:text-amber-400 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-3 text-amber-400" />
                    <span className="text-sm">info@odernixhomes.com</span>
                  </a>

                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 mr-3 text-amber-400" />
                    <span className="text-sm">Mon-Fri: 8AM-6PM</span>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                  <h4 className="font-semibold mb-3">Newsletter</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Get the latest updates on properties and market insights.
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Subscribe
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-5 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-8">Follow Our Journey</h3>

              {/* Social Links */}
              <div className="flex justify-center space-x-6 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="group"
                  >
                    <div
                      className={`w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center ${social.bgColor} transition-all duration-300`}
                    >
                      <social.icon
                        className={`w-6 h-6 text-gray-300 ${social.color} group-hover:text-white transition-colors`}
                      />
                    </div>
                    <span className="block text-xs text-gray-400 mt-2 group-hover:text-amber-400 transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>

              <p className="text-gray-400 max-w-2xl mx-auto">
                Join thousands of followers who stay updated with our latest
                projects, market insights, and real estate tips.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="container mx-auto px-5 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className={`${montserrat.className} text-gray-400 text-sm`}>
                <p>
                  ©2025 All rights reserved to Odernix Homes |
                  <Link
                    href="/privacy"
                    className="hover:text-amber-400 transition-colors ml-1"
                  >
                    Privacy Policy
                  </Link>
                  <span className="mx-2">|</span>
                  <Link
                    href="/terms"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </p>
              </div>

              {/* Additional Links */}
              <div className="flex items-center space-x-6 text-sm">
                <Link
                  href="/sitemap"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Sitemap
                </Link>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Careers
                </Link>
                <Link
                  href="/investors"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Investors
                </Link>
              </div>

              {/* Back to Top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white p-3 rounded-xl hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 group"
              >
                <ArrowRight className="w-5 h-5 -rotate-90 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
