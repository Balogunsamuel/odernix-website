"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  User,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Tag,
  Eye,
  MessageCircle,
  Share2,
  BookOpen,
  TrendingUp,
  Home,
  Building2,
  Lightbulb,
  Target,
  Star,
  ChevronRight,
  Heart,
  Bookmark,
  X,
} from "lucide-react";
import { comorant_garamond, montserrat } from "@/utils/fonts";
import NextNProgress from "nextjs-progressbar";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title:
      "The Future of Real Estate Investment in Abuja: Trends to Watch in 2025",
    excerpt:
      "Discover the emerging trends shaping Abuja's real estate market and how smart investors are positioning themselves for maximum returns in Nigeria's capital city.",
    content:
      "As Nigeria's capital continues to grow, Abuja presents unique opportunities for real estate investors. From government policy changes to infrastructure development, we explore the key trends that will define the market in 2025.",
    author: "Odernix Team",
    date: "2024-12-20",
    readTime: "8 min read",
    category: "Investment",
    tags: ["Investment", "Abuja", "Market Trends", "2025"],
    image: "/bastion.jpg",
    featured: true,
    views: 1250,
    comments: 23,
    slug: "future-real-estate-investment-abuja-2025",
  },
  {
    id: 2,
    title: "5 Essential Tips for First-Time Property Buyers in Nigeria",
    excerpt:
      "Navigate the Nigerian property market with confidence. Our comprehensive guide covers everything from financing options to legal considerations for new buyers.",
    content:
      "Buying your first property in Nigeria can seem overwhelming, but with the right guidance, it becomes an exciting journey toward homeownership and financial security.",
    author: "Sarah Johnson",
    date: "2024-12-15",
    readTime: "6 min read",
    category: "Buying Guide",
    tags: ["First-time Buyers", "Property Purchase", "Nigeria", "Guide"],
    image: "/terraza.jpg",
    featured: false,
    views: 890,
    comments: 17,
    slug: "first-time-property-buyers-nigeria-tips",
  },
  {
    id: 3,
    title: "Sustainable Building Practices: How Odernix Homes Leads the Way",
    excerpt:
      "Learn about our commitment to eco-friendly construction and how sustainable building practices are shaping the future of Nigerian real estate development.",
    content:
      "At Odernix Homes, we believe in building for the future. Our sustainable practices not only protect the environment but also provide long-term value for our clients.",
    author: "Michael Adebayo",
    date: "2024-12-10",
    readTime: "5 min read",
    category: "Sustainability",
    tags: ["Sustainability", "Green Building", "Environment", "Innovation"],
    image: "/bastion2.jpg",
    featured: false,
    views: 675,
    comments: 12,
    slug: "sustainable-building-practices-odernix-homes",
  },
  {
    id: 4,
    title: "Understanding Property Valuation in Abuja: A Complete Guide",
    excerpt:
      "Master the art of property valuation with our detailed guide covering market factors, valuation methods, and insider tips for accurate property assessment.",
    content:
      "Property valuation is crucial for both buyers and sellers. Understanding how properties are valued in Abuja helps you make informed decisions and negotiate better deals.",
    author: "David Okafor",
    date: "2024-12-05",
    readTime: "7 min read",
    category: "Valuation",
    tags: ["Property Valuation", "Abuja Market", "Real Estate", "Investment"],
    image: "/bastion.jpg",
    featured: false,
    views: 1100,
    comments: 31,
    slug: "property-valuation-abuja-complete-guide",
  },
  {
    id: 5,
    title: "Smart Home Technology: The Future of Nigerian Real Estate",
    excerpt:
      "Explore how smart home technology is revolutionizing Nigerian properties and why tech-integrated homes are becoming the new standard for modern living.",
    content:
      "From automated security systems to energy-efficient smart appliances, technology is transforming how we live and interact with our homes in Nigeria.",
    author: "Odernix Team",
    date: "2024-11-30",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Smart Homes", "Technology", "Innovation", "Modern Living"],
    image: "/terraza.jpg",
    featured: false,
    views: 820,
    comments: 19,
    slug: "smart-home-technology-nigerian-real-estate",
  },
  {
    id: 6,
    title: "The Rise of Co-living Spaces in Urban Nigeria",
    excerpt:
      "Discover how co-living spaces are addressing housing challenges in Nigerian cities and creating new opportunities for property developers and residents alike.",
    content:
      "Co-living represents a new approach to urban housing, combining affordability with community living. We explore this growing trend in Nigerian cities.",
    author: "Amina Hassan",
    date: "2024-11-25",
    readTime: "5 min read",
    category: "Trends",
    tags: ["Co-living", "Urban Housing", "Community", "Innovation"],
    image: "/bastion2.jpg",
    featured: false,
    views: 560,
    comments: 8,
    slug: "co-living-spaces-urban-nigeria",
  },
];

const categories = [
  { name: "All Posts", value: "all", icon: BookOpen, count: blogPosts.length },
  { name: "Investment", value: "investment", icon: TrendingUp, count: 2 },
  { name: "Buying Guide", value: "buying guide", icon: Home, count: 1 },
  {
    name: "Sustainability",
    value: "sustainability",
    icon: Lightbulb,
    count: 1,
  },
  { name: "Technology", value: "technology", icon: Building2, count: 1 },
  { name: "Trends", value: "trends", icon: Target, count: 1 },
];

const popularTags = [
  "Investment",
  "Abuja",
  "Property Purchase",
  "Smart Homes",
  "Market Trends",
  "First-time Buyers",
  "Sustainability",
  "Technology",
];

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isLoading, setIsLoading] = useState(false);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([]);

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) =>
        post.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm]);

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleBookmark = (postId: number) => {
    setBookmarkedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <NextNProgress color="#f59e0b" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20"></div>
        </div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl"></div>

        <div className="relative container mx-auto px-5 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-500/30 mb-6">
                <BookOpen className="w-4 h-4 mr-2 text-amber-400" />
                <span className="text-sm font-medium text-amber-300">
                  Expert Insights
                </span>
              </div>

              <div className={comorant_garamond.className}>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
                  Our
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                    Blog
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Stay updated with the latest insights, trends, and expert advice
                on real estate investment, property development, and the
                Nigerian housing market.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  {
                    number: blogPosts.length.toString(),
                    label: "Articles",
                    icon: BookOpen,
                  },
                  { number: "10K+", label: "Monthly Readers", icon: Eye },
                  { number: "5", label: "Expert Authors", icon: User },
                  { number: "4.8", label: "Average Rating", icon: Star },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors bg-gray-50 focus:bg-white"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.value
                      ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-6 text-gray-600">
            Showing{" "}
            <span className="font-semibold text-amber-600">
              {filteredPosts.length}
            </span>{" "}
            of <span className="font-semibold">{blogPosts.length}</span>{" "}
            articles
            {searchTerm && ` for "${searchTerm}"`}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "all" && !searchTerm && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Featured Article
              </h2>
              <p className="text-xl text-gray-600">
                Our latest insights on the Nigerian real estate market
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Featured Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-amber-500 text-white rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      Featured
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="absolute top-6 right-6 flex space-x-3">
                    <button
                      onClick={() => toggleLike(featuredPost.id)}
                      className={`w-10 h-10 rounded-full ${
                        likedPosts.includes(featuredPost.id)
                          ? "bg-red-500"
                          : "bg-white/20"
                      } backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all`}
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likedPosts.includes(featuredPost.id)
                            ? "text-white fill-current"
                            : "text-white"
                        }`}
                      />
                    </button>
                    <button
                      onClick={() => toggleBookmark(featuredPost.id)}
                      className={`w-10 h-10 rounded-full ${
                        bookmarkedPosts.includes(featuredPost.id)
                          ? "bg-blue-500"
                          : "bg-white/20"
                      } backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all`}
                    >
                      <Bookmark
                        className={`w-5 h-5 ${
                          bookmarkedPosts.includes(featuredPost.id)
                            ? "text-white fill-current"
                            : "text-white"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>

                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {featuredPost.author}
                        </p>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Eye className="w-4 h-4 mr-1" />
                          <span>{featuredPost.views}</span>
                          <MessageCircle className="w-4 h-4 ml-4 mr-1" />
                          <span>{featuredPost.comments}</span>
                        </div>
                      </div>
                    </div>

                    <Link href={`/blog/${featuredPost.slug}`}>
                      <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                        <span className="mr-2">Read More</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-5">
          {filteredPosts.length === 0 ? (
            // Empty State
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                No Articles Found
              </h3>
              <p className="text-gray-600 mb-8">
                {searchTerm
                  ? `No articles match your search for "${searchTerm}"`
                  : "No articles match the selected category"}
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-amber-600 hover:to-orange-700 transition-all"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleLike(post.id);
                        }}
                        className={`w-8 h-8 rounded-full ${
                          likedPosts.includes(post.id)
                            ? "bg-red-500"
                            : "bg-white/20"
                        } backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all`}
                      >
                        <Heart
                          className={`w-4 h-4 ${
                            likedPosts.includes(post.id)
                              ? "text-white fill-current"
                              : "text-white"
                          }`}
                        />
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleBookmark(post.id);
                        }}
                        className={`w-8 h-8 rounded-full ${
                          bookmarkedPosts.includes(post.id)
                            ? "bg-blue-500"
                            : "bg-white/20"
                        } backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all`}
                      >
                        <Bookmark
                          className={`w-4 h-4 ${
                            bookmarkedPosts.includes(post.id)
                              ? "text-white fill-current"
                              : "text-white"
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                          +{post.tags.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-3">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 text-sm">
                            {post.author}
                          </p>
                          <div className="flex items-center text-gray-500 text-xs">
                            <Eye className="w-3 h-3 mr-1" />
                            <span>{post.views}</span>
                            <MessageCircle className="w-3 h-3 ml-3 mr-1" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <button className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-900 transition-colors group/btn">
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Sidebar Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Popular Tags */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Tag className="w-6 h-6 mr-3 text-amber-600" />
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-3">
                {popularTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchTerm(tag)}
                    className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-amber-100 hover:text-amber-800 transition-colors border border-gray-200"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 opacity-90">
                Get the latest insights on Nigerian real estate delivered to
                your inbox weekly.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="w-full bg-white text-amber-600 py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <TrendingUp className="w-6 h-6 mr-3 text-amber-600" />
                Recent Posts
              </h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <Link key={post.id} href={`/blog/${post.slug}`}>
                    <div className="flex items-center space-x-4 p-4 bg-white rounded-2xl hover:shadow-lg transition-shadow cursor-pointer group">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-amber-600 transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 mt-2">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our Expert Authors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of real estate professionals and industry experts share
              their knowledge to help you make informed decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Odernix Team",
                role: "Real Estate Experts",
                expertise: "Market Analysis & Investment Strategy",
                articles: 15,
                image: "/bastion.jpg",
              },
              {
                name: "Sarah Johnson",
                role: "Property Consultant",
                expertise: "First-time Buyer Guidance",
                articles: 8,
                image: "/terraza.jpg",
              },
              {
                name: "Michael Adebayo",
                role: "Sustainability Expert",
                expertise: "Green Building & Environment",
                articles: 6,
                image: "/bastion2.jpg",
              },
              {
                name: "David Okafor",
                role: "Valuation Specialist",
                expertise: "Property Valuation & Assessment",
                articles: 10,
                image: "/bastion.jpg",
              },
            ].map((author, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 text-center group hover:shadow-lg transition-shadow"
              >
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <User className="w-10 h-10 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {author.name}
                </h3>
                <p className="text-amber-600 font-medium mb-2">{author.role}</p>
                <p className="text-gray-600 text-sm mb-4">{author.expertise}</p>

                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-amber-600 mb-1">
                    {author.articles}
                  </div>
                  <div className="text-gray-500 text-sm">Articles Written</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about Nigerian real estate
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question:
                    "What documents do I need to buy property in Nigeria?",
                  answer:
                    "You'll need valid ID, proof of income, bank statements, and legal documentation like Certificate of Occupancy.",
                },
                {
                  question: "How do I verify property ownership in Abuja?",
                  answer:
                    "Check with the Abuja Geographic Information Systems (AGIS) and ensure all documents are verified by qualified legal professionals.",
                },
                {
                  question:
                    "What are the typical property investment returns in Abuja?",
                  answer:
                    "Property investments in prime Abuja locations typically yield 8-15% annual returns, depending on location and property type.",
                },
                {
                  question: "Can foreigners buy property in Nigeria?",
                  answer:
                    "Yes, foreigners can purchase property in Nigeria, but they cannot own land outright. They can obtain long-term leases through proper legal channels.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-start">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-sm font-bold">?</span>
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed ml-9">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Start Your Real Estate Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Our expert team is here to guide you through every step of your
              property investment. From market insights to financing options, we
              have the knowledge you need to succeed.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <Link href="/contact" className="flex-1">
                <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-amber-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center w-full">
                  <span className="mr-2">Get Expert Advice</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>

              <Link href="/projects" className="flex-1">
                <div className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center w-full">
                  <Building2 className="w-5 h-5 mr-2" />
                  View Properties
                </div>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 pt-8 border-t border-white/30">
              <div className="flex items-center">
                <span className="font-semibold">+234 912 899 9972</span>
              </div>
              <div className="flex items-center">
                <span>info@odernixhomes.com</span>
              </div>
              <div className="flex items-center">
                <span>Wuse 2, Abuja, Nigeria</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
