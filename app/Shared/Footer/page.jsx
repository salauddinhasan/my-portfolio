import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-secondary border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo / Brand */}
        <Link href="/" className="text-2xl font-bold text-default">
          MyPortfolio<span className="text-blue-600">.</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-600 dark:text-gray-400 font-medium">
          <li>
            <Link href="#home" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-blue-600">
              About
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-600">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-gray-600 dark:text-gray-400">
          <Link
            href="https://github.com/salauddinhasan"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <Github size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/md-salauddin01/"
            target="_blank"
            className="hover:text-blue-600 transition"
          >
            <Linkedin size={22} />
          </Link>
          <Link
            href="salauddinhasan244@gmail.com"
            className="hover:text-blue-600 transition"
          >
            <Mail size={22} />
          </Link>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </div>
  );
}
