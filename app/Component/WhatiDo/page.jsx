import { Code, Monitor, Feather, Sparkles } from "lucide-react";

export default function WhatIDo() {
  const services = [
    {
      icon: <Code size={32} className="text-blue-600" />,
      title: "Web Development",
      description:
        "Building responsive, modern, and high-performance websites using Next.js, React, and Tailwind CSS.",
    },
    {
      icon: <Monitor size={32} className="text-blue-600" />,
      title: "UI/UX Design",
      description:
        "Designing clean and intuitive user interfaces and experiences for web applications.",
    },
    {
      icon: <Feather size={32} className="text-blue-600" />,
      title: "Custom Solutions",
      description:
        "Providing tailored web solutions that match your business or personal needs.",
    },
  ];

  return (
    <section id="services" className=" bg-secondary py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles size={24} className="text-blue-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-default">
              What I <span className="text-secondary">Do</span>
            </h2>
            <Sparkles size={24} className="text-blue-500" />
          </div>
          <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-default  text-lg max-w-2xl mx-auto leading-relaxed">
            I offer a comprehensive range of services to transform your ideas
            into exceptional digital experiences on the web.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              {/* Background Effect */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-blue-600/5 rounded-2xl transform group-hover:scale-105 transition-all duration-300"></div>

              {/* Card */}
              <div className="relative cardBg-secondary  backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/50 group-hover:shadow-xl group-hover:border-blue-200/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon Container */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-2xl group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-800 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
                  <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -z-10 top-4 right-4 w-8 h-8 bg-blue-400/10 rounded-full group-hover:scale-150 group-hover:opacity-50 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 text-gray-400">
            <div className="w-12 h-px bg-gray-300"></div>
            <span className="text-sm">Crafting digital excellence</span>
            <div className="w-12 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
