"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useLayoutEffect, useRef, useState } from "react";
import { comorant_garamond, montserrat } from "@/utils/fonts";
import { motion } from "framer-motion";
import NextNProgress from "nextjs-progressbar";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building2,
  Calendar,
  CheckCircle,
  Star,
  Globe,
  Users,
  ArrowRight,
  Home,
  Briefcase,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "+234 (0)912 899 9972",
    secondary: "Available 24/7 for urgent inquiries",
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    action: "tel:+2349128999972",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@odernixhomes.com",
    secondary: "We'll respond within an hour",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    action: "mailto:info@odernixhomes.com",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    primary: "A4, 29b N'Djamena Crescent",
    secondary: "Wuse 2, Abuja, Nigeria",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    action: "https://maps.google.com/?q=29b+N'djamena+Crescent+Wuse+2+Abuja",
  },
  {
    icon: Clock,
    title: "Business Hours",
    primary: "Mon - Fri: 8:00 AM - 5:00 PM",
    secondary: "Daily",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    action: null,
  },
];

const services = [
  { icon: Home, label: "Residential Properties", value: "residential" },
  { icon: Building2, label: "Commercial Real Estate", value: "commercial" },
  { icon: Briefcase, label: "Investment Opportunities", value: "investment" },
  { icon: Users, label: "Consultancy Services", value: "consultancy" },
];

const reasons = [
  {
    icon: Star,
    title: "Expert Guidance",
    description:
      "Get personalized advice from our experienced real estate professionals",
  },
  {
    icon: Globe,
    title: "Local Market Knowledge",
    description:
      "Deep understanding of construction and property market and neighborhoods",
  },
  {
    icon: CheckCircle,
    title: "Proven Track Record",
    description: "Successfully completed projects with satisfied clients",
  },
  {
    icon: Users,
    title: "Comprehensive Support",
    description:
      "End-to-end assistance from property search to final transaction",
  },
];

export default function Page() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playVideo, setPlayVideo] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    tour: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClick = () => setPlayVideo(true);

  useLayoutEffect(() => {
    if (videoRef.current) videoRef.current.play();
  }, [playVideo]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form or show success message
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <NextNProgress color="#f59e0b" />

      {/* Grid Lines */}
      <ul className="grid_lines w-full flex absolute z-10 justify-between pointer-events-none">
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
        <li className="grid_line"></li>
      </ul>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          onLoadedMetadata={(e) => (e.target as HTMLVideoElement).play()}
          ref={videoRef}
          onClick={onClick}
        >
          <source src="/head_video2.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-5 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-500/30 mb-6">
                <MessageSquare className="w-4 h-4 mr-2 text-amber-400" />
                <span className="text-sm font-medium text-amber-300">
                  Let's Start a Conversation
                </span>
              </div>

              <div className={comorant_garamond.className}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                  Get in
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    Touch with Us
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
                Whether you're a property investor, an agent, or a prospective
                buyer, we're here to support you every step of the way. Let us
                help you turn your dream home into a reality!
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { number: "< 2hrs", label: "Response Time" },
                  { number: "24/7", label: "Support" },
                  { number: "50+", label: "Happy Clients" },
                  { number: "3+", label: "Years Experience" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the most convenient way to get in touch with our team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div
                  className={`${info.bgColor} rounded-3xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100`}
                  onClick={() =>
                    info.action && window.open(info.action, "_blank")
                  }
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-gray-800 font-semibold mb-2">
                    {info.primary}
                  </p>
                  <p className="text-gray-600 text-sm">{info.secondary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 2
                  hours during business hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white"
                    placeholder="+234 (0)xxx xxx xxxx"
                  />
                </div>

                {/* Service Interest */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tour Interest */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Book a Property Tour
                  </label>
                  <select
                    name="tour"
                    value={formData.tour}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes, I want to book a tour</option>
                    <option value="no">No, not at this time</option>
                    <option value="later">Maybe later</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us more about your requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Why Choose Odernix Homes?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We love to hear from you! Contact us via email, phone, or
                  visit our office in Abuja. Our expert team is ready to help
                  you find the perfect property solution.
                </p>
              </div>

              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Info Card */}
              <div className="mt-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Building2 className="w-6 h-6 mr-2 text-amber-600" />
                  Visit Our Office
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-amber-600" />
                    <span>A4, 29b N'Djamena Crescent, Wuse 2, Abuja</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-amber-600" />
                    <span>Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-amber-600" />
                    <span>+234 (0)912 899 9972</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Find Your Perfect Property?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Don't wait any longer. Get in touch with us today and let our
              experts guide you through your real estate journey in Abuja.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <a
                href="tel:+2349128999972"
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>

              <a
                href="#contact-form"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Tour
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
