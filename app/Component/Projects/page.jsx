"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with Next.js, Tailwind CSS, and React.",
      image: "/p1.png",
      demo: "https://ph-d72-keep-keeper.vercel.app/",
      github: "https://github.com/salauddinhasan/ph-d72-keep-keeper",
    },
    {
      title: "E-commerce Store",
      description:
        "Full-stack e-commerce application with payment integration and admin panel.",
      image: "/p2.png",
      demo: "https://skillsphere-project-phi.vercel.app/",
      github: "https://github.com/salauddinhasan/a8-skillsphere-app-",
    },
    {
      title: "Blog Platform",
      description:
        "Dynamic blog platform with markdown support and user authentication.",
      image: "/p3.png",
      demo: "https://dragon-news-next-better-auth-ashy.vercel.app",
      github: "https://github.com/salauddinhasan/dragon-news-next-better-auth-",
    },
    {
      title: "Blog Platform 2",
      description:
        "Dynamic blog platform with markdown support and user authentication.",
      image: "/p3.png",
      demo: "#",
      github: "#",
    },
  ];

  const [current, setCurrent] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Width of each card in percentage
  const cardWidthPercentage = 100 / visibleCards;

  return (
    <section id="projects" className="bg-secondary py-24 relative">
      {projects.length > 3 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 text-blue-700 left-10 sm:left-2 z-10 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 text-blue-700 right-10 sm:right-2 z-10 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition"
          >
            <ChevronRight size={22} />
          </button>
        </>
      )}

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-default">
              Featured <span className="text-secondary">Projects</span>
            </h2>
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          </div>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-default  text-lg max-w-2xl mx-auto leading-relaxed">
            Some of my recent works that showcase my skills and passion for web
            development. Click to view live demo or explore the code on GitHub.
          </p>
        </div>

        {projects.length <= 3 ? (
          <>
            {/* Projects Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group relative">
                  {/* Background Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-3xl transform group-hover:scale-105 group-hover:opacity-100 opacity-0 transition-all duration-500"></div>

                  {/* Project Card */}
                  <div className="relative cardBg-secondary backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 group-hover:shadow-2xl group-hover:border-blue-200/50 transition-all duration-500 overflow-hidden h-full flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay linear */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Hover Actions */}
                      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                          href={project.demo}
                          target="_blank"
                          className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full shadow-lg hover:scale-110 hover:bg-white transition-all duration-200"
                        >
                          <ExternalLink size={20} />
                        </Link>
                        <Link
                          href={project.github}
                          target="_blank"
                          className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full shadow-lg hover:scale-110 hover:bg-white transition-all duration-200"
                        >
                          <Github size={20} />
                        </Link>
                      </div>

                      {/* Project Number */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-800 leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <Link
                          href={project.demo}
                          target="_blank"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium text-sm"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </Link>
                        <Link
                          href={project.github}
                          target="_blank"
                          className="flex-1 btn-secondary  flex items-center justify-center gap-2 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transform hover:-translate-y-0.5 transition-all duration-200 font-medium text-sm"
                        >
                          <Github size={16} />
                          Code
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="relative w-full overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${current * cardWidthPercentage}%)`,
                }}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4 w-full md:w-1/2 lg:w-1/3"
                  >
                    {/* Project Card */}
                    <div className="relative cardBg-secondary backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 group-hover:shadow-2xl group-hover:border-blue-200/50 transition-all duration-500 overflow-hidden w-full max-w-2xl flex flex-col">
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {/* Overlay linear */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Hover Actions */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Link
                            href={project.demo}
                            target="_blank"
                            className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full shadow-lg hover:scale-110 hover:bg-white transition-all duration-200"
                          >
                            <ExternalLink size={20} />
                          </Link>
                          <Link
                            href={project.github}
                            target="_blank"
                            className="bg-white/90 backdrop-blur-sm text-gray-900 p-3 rounded-full shadow-lg hover:scale-110 hover:bg-white transition-all duration-200"
                          >
                            <Github size={20} />
                          </Link>
                        </div>

                        {/* Project Number */}
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                          0{index + 1}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-800 leading-relaxed mb-6">
                            {project.description}
                          </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 pt-4 border-t border-gray-100">
                          <Link
                            href={project.demo}
                            target="_blank"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 btn-primary text-white rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium text-sm"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </Link>
                          <Link
                            href={project.github}
                            target="_blank"
                            className="flex-1 flex btn-secondary dark:text-gray-200 items-center justify-center gap-2 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transform hover:-translate-y-0.5 transition-all duration-200 font-medium text-sm"
                          >
                            <Github size={16} />
                            Code
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {projects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      current === i ? "bg-blue-600 w-6" : "bg-gray-300"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* View More Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 group cursor-pointer">
            <span className="font-medium">View all projects</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
