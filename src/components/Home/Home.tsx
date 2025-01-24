import { Code2 } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  const arr = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Postgresql",
    "Docker",
    "AWS",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen pt-6 bg-neutral-900 flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Frontend Developer
                <span className="block text-blue-500">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                2.6+ years of experience in building modern web applications
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-400  leading-relaxed">
                Specializing in React.js, Next.js, Node.js, and cloud
                technologies. Passionate about creating high-performance
                applications and delivering seamless user experiences.
              </p>

              <div className="flex flex-wrap gap-3">
                {arr.map((ele, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                  >
                    {ele}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Contact Me
              </Link>
              <Link
                href="#projects"
                className="px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors duration-300"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"></div>
            <div className="relative bg-neutral-800 p-8 rounded-2xl border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Code2 className="text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Full Stack Developer
                    </h3>
                    <p className="text-gray-400">MERN Stack Specialist</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Frontend Development</span>
                    <span className="text-blue-500">91%</span>
                  </div>
                  <div className="h-2 bg-neutral-700 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full w-11/12"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Backend Development</span>
                    <span className="text-blue-500">75%</span>
                  </div>
                  <div className="h-2 bg-neutral-700 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full w-9/12"></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Cloud &amp; DevOps</span>
                    <span className="text-blue-500">50%</span>
                  </div>
                  <div className="h-2 bg-neutral-700 rounded-full">
                    <div className="h-2 bg-blue-500 rounded-full w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
