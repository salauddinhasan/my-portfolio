"use client";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  MessageCircle,
  MapPin,
  Clock,
} from "lucide-react";
import { useState } from "react";

export default function ContactMe() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const formData = new FormData(e.target);
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log("Form submitted:", data))
      .catch((err) => console.error("Form submit error:", err));
  };

  return (
    <section id="contact" className="bg-primary py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <MessageCircle className="text-blue-500" size={28} />
            <h2 className="text-4xl md:text-5xl font-bold text-default">
              Let&apos;s{" "}
              <span className="text-transparent text-secondary bg-clip-text">
                Connect
              </span>
            </h2>
            <MessageCircle className="text-blue-500" size={28} />
          </div>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-default text-lg max-w-2xl mx-auto leading-relaxed">
            I&apos;m always excited to discuss new opportunities, creative
            ideas, or just have a friendly chat. Don&apos;t hesitate to reach
            out!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <div className="flex-1 max-w-2xl mx-auto lg:mx-0 w-full">
            <div className="cardBg-secondary backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-10 border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="text-left mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Send me a message
                  </h3>
                </div>
                <p className="text-gray-700  flex items-center gap-2">
                  <Clock size={16} />
                  I&apos;ll get back to you within 24 hours
                </p>
              </div>
              {submitted ? (
                <div className="text-center py-10 px-6">
                  <div className="max-w-md mx-auto">
                    <div className="w-20 h-20 mt-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-10 h-10 text-green-600 animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{
                          animation: "bounceIn 0.8s ease-out forwards",
                        }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <h3 className="text-3xl font-bold text-green-600 mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-gray-700 mb-2 text-lg">
                      Thank you for reaching out!
                    </p>
                    <p className="text-gray-600 mb-8">
                      I&apos;ve received your message and will get back to you
                      soon.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-flex items-center gap-2  btn-primary hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 font-semibold group relative overflow-hidden"
                    >
                      <svg
                        className="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      <span className="relative z-10">
                        Send Another Message
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="access_key"
                    value="34038484-9864-4654-b1db-3f591eaff005"
                  />

                  <div className="space-y-2 text-start">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium text-sm uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border text-gray-700 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 hover:bg-white/70 placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2 text-start">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium text-sm uppercase tracking-wider"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border text-gray-700 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 hover:bg-white/70 placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2 text-start">
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium text-sm uppercase tracking-wider"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full border text-gray-700 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 hover:bg-white/70 placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project, collaboration ideas, or just say hello..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 font-semibold flex items-center justify-center gap-2 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    <span className="relative z-10">Send Message</span>
                    <Send
                      size={18}
                      className="relative z-10 group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Social Links & Info */}
          <div className="flex-1 max-w-md mx-auto lg:mx-0">
            <div className="cardBg-primary text-white rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6">
                Let&apos;s start a conversation
              </h3>
              <p className="text-blue-200 mb-8 leading-relaxed">
                Whether you&apos;re looking to collaborate, have a question, or
                just want to connect, I&apos;m here and ready to help bring your
                ideas to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-200 group">
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <Mail size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-blue-200 text-sm font-medium">
                      Email me at
                    </p>
                    <p className="font-semibold text-white">
                      web.salauddin@.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all duration-200 group">
                  <div className="bg-white/20 p-3 rounded-lg group-hover:scale-110 transition-transform duration-200">
                    <MapPin size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-blue-200 text-sm font-medium">
                      Based in
                    </p>
                    <p className="font-semibold text-white">Bangladesh</p>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-blue-200 mb-6 font-medium">
                    Find me on social media
                  </p>
                  <div className="flex justify-center gap-4">
                    {[
                      {
                        icon: Mail,
                        href: "salauddinhasan244@gmail.com",
                        label: "Email",
                      },
                      {
                        icon: Github,
                        href: "https://github.com/salauddinhasan",
                        label: "GitHub",
                      },
                      {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/md-salauddin01/",
                        label: "LinkedIn",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 p-4 rounded-xl transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        <social.icon
                          size={24}
                          className="relative z-10 group-hover:scale-110 transition-transform duration-200"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Response Info */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <p className="text-blue-200 text-sm">
                      Quick response guaranteed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
