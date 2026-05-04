import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="h-screen  mt-15 relative overflow-hidden bg-Hero-primary">
      <section
        id="home"
        className="relative flex min-h-screen flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 lg:py-0"
      >
        {/* Text Content */}
        <div className="flex-1 space-y-8 lg:space-y-10 z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600 font-medium">
              Available for new projects
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-default  leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-transparent text-primary  bg-clip-text">
                Md. Salauddin Khan
              </span>{" "}
              👋
            </h1>
            <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-xl text-base max-w-2xl leading-relaxed">
            A passionate{" "}
            <span className="text-secondary font-semibold  px-1 rounded">
              Web Developer
            </span>{" "}
            who loves building beautiful, responsive, and user-friendly websites
            using modern technologies like{" "}
            <span className="font-semibold text-default">Next.js</span> and{" "}
            <span className="font-semibold text-default">Tailwind CSS</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 btn-primary text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold"
            >
              <span>View My Work</span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 btn-secondary backdrop-blur-sm border border-gray-300 text-gray-700 dark:text-gray-300 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-300 transform hover:-translate-y-1 transition-all duration-300 font-semibold"
            >
              <span>Contact Me</span>
              <Download
                size={20}
                className="group-hover:translate-y-0.5 transition-transform duration-300"
              />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-default">10+</div>
              <div className="text-sm text-default ">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-default">2+</div>
              <div className="text-sm text-default ">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-default">5+</div>
              <div className="text-sm text-default ">Happy Clients</div>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end items-center mt-16 lg:mt-0 relative z-10">
          <div className="relative">
            {/* Background effects */}
            <div className="absolute -inset-4 hero-ImgShadow-primary rounded-full opacity-30 blur-lg"></div>

            {/* Main image container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm group">
              <Image
                src="/salauddin.png"
                alt="Md. Salauddin Khan - Web Developer"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority
              />
              {/* Overlay linear */}
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/20 rounded-2xl rotate-12 backdrop-blur-sm border border-yellow-200/30"></div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-400/20 rounded-3xl -rotate-12 backdrop-blur-sm border border-blue-200/30"></div>

            {/* Tech stack floating badges */}
            <div className="absolute -left-8 top-1/4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-4 py-2 shadow-lg">
              <span className="text-sm font-semibold text-gray-700">
                Next.js
              </span>
            </div>
            <div className="absolute -right-8 bottom-1/4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-4 py-2 shadow-lg">
              <span className="text-sm font-semibold text-gray-700">React</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
          <div className="flex flex-col items-center gap-2 text-gray-400 animate-bounce">
            <span className="text-sm">Scroll down</span>
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-300 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
