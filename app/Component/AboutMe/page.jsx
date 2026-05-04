import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="py-20 bg-primary">
            <section
                id="about"
                className="max-w-7xl mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-16"
            >
                {/* Image Section */}
                <div className="flex-1 flex justify-center lg:justify-start relative">
                    <div className="relative">
                        {/* Background decorative elements */}
                        <div className="absolute -inset-4 bg-linear-to-r from-blue-400 to-blue-500 rounded-2xl transform rotate-3 scale-105 opacity-10"></div>
                        <div className="absolute -inset-4 hero-ImgShadow-primary rounded-2xl transform -rotate-3 scale-105 opacity-5"></div>

                        {/* Main image container */}
                        <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/salauddin.png"
                                alt="Md. Salauddin Khan"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Overlay linear */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-500 rounded-2xl rotate-12 opacity-80"></div>
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-400 rounded-xl -rotate-12 opacity-60"></div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 space-y-8">
                    {/* Header Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-1 bg-linear-to-r from-blue-500 to-blue-600 rounded-full"></div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-default">
                                About <span className="text-secondary">Me</span>
                            </h2>
                        </div>
                        <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-blue-600 rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <p className="text-base text-lg leading-relaxed text-justify">
                            Hello! I&apos;m <span className="font-semibold text-secondary bg-blue-50 dark:bg-blue-950 px-1 rounded">Md. Salauddin Khan</span>,
                            a passionate web developer with experience in building responsive, modern,
                            and user-friendly websites. I specialize in <span className="font-semibold text-gray-900 dark:text-gray-400 bg-yellow-50 dark:bg-green-900 px-1 rounded">Next.js</span>,
                            <span className="font-semibold text-gray-900 dark:text-gray-400 bg-blue-50 dark:bg-blue-950 px-1 rounded"> React</span>, and
                            <span className="font-semibold text-gray-900 dark:text-gray-400 bg-cyan-50 dark:bg-cyan-950 px-1 rounded"> Tailwind CSS</span>.
                        </p>

                        <p className="text-base text-lg leading-relaxed text-justify">
                            I love turning ideas into beautiful, functional web applications. When I&apos;m
                            not coding, you can find me exploring the latest web technologies, designing
                            UI/UX interfaces, or contributing to open-source projects.
                        </p>
                    </div>

                    {/* Stats or Skills Preview */}
                    <div className="flex flex-wrap gap-6 py-4">
                        <div className="flex items-center gap-2 cardBg-secondary px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-800 font-medium">Frontend</span>
                        </div>
                        <div className="flex items-center gap-2 cardBg-secondary px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-800  font-medium">UI/UX</span>
                        </div>
                        <div className="flex items-center gap-2 cardBg-secondary px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-800 font-medium">Responsive</span>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4">
                        <a
                            href="/Shakib.jpg"
                            className="inline-flex items-center gap-3 px-8 py-4 btn-primary text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold group"
                        >
                            <span>Download Resume</span>
                            <svg
                                className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;