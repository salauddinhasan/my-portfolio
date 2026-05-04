"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/Context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-100/50 dark:border-gray-700/50"
          : "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              Salauddin
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </span>
          </div>
          <Sparkles
            size={16}
            className="text-blue-500 opacity-0 group-hover:opacity-100 transform group-hover:rotate-12 transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1 bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl px-2 py-1 border border-gray-200/50 dark:border-gray-600/50">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative px-6 py-2 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-blue-500 to-cyan-500 group-hover:w-4 transition-all duration-300 rounded-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="px-6 py-2.5 btn-primary text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold text-sm"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg border transition-all duration-300 ${
              isOpen
                ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700 text-blue-600 dark:text-blue-400"
                : "bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-200 dark:hover:border-blue-600"
            }`}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-100/50 dark:border-gray-700/50 shadow-xl">
          <ul className="flex flex-col py-4">
            {[
              { href: "#home", label: "Home", icon: "🏠" },
              { href: "#about", label: "About", icon: "👨‍💻" },
              { href: "#projects", label: "Projects", icon: "💼" },
              { href: "#contact", label: "Contact", icon: "📞" },
            ].map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 px-6 py-4 text-gray-700 dark:text-gray-300 font-medium hover:bg-blue-50/50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 group border-l-4 border-transparent hover:border-blue-500 dark:hover:border-blue-400"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="px-6 py-4 border-t border-gray-100/50 dark:border-gray-700/50">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
            >
              <span>Get In Touch</span>
              <Sparkles size={16} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
