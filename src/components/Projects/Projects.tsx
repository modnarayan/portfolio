import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Project 1 --> */}
          <div className="group bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-blue-500 transition-all duration-300 animate__animated animate__fadeInLeft">
            <div className="relative p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Vendor &amp; Customer Portal
              </h3>

              {/* Move this section below heading on small screens */}
              <div className="flex flex-col gap-2 mt-2 md:absolute md:top-0 md:right-0 md:mt-4 md:mr-4 md:flex-row text-center">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Zustand
                </span>
              </div>

              <p className="text-gray-400 mb-4">Amerit Fleet Solutions</p>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Led the frontend development of a comprehensive portal system
                  improving business workflows and user engagement.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Real-time updates using WebSocket
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    20% performance improvement
                  </li>
                </ul>
              </div>

              <div className="mt-6 flex gap-4">
                <Link href="https://customers.ameritfleet.com/" target="_blank">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    View Demo
                  </button>
                </Link>

                <button
                  disabled
                  className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg transition-colors duration-300 
            opacity-50 cursor-not-allowed"
                >
                  Code
                </button>
              </div>
            </div>
          </div>

          {/* 
        <!-- Project 2 --> */}
          <div className="group bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-blue-500 transition-all duration-300 animate__animated animate__fadeInRight">
            <div className="relative p-6">
              <h3 className="text-xl font-bold text-white mb-2">Quick Chat</h3>
              <div className="flex flex-col gap-2 mt-2 md:absolute md:top-0 md:right-0 md:mt-4 md:mr-4 md:flex-row text-center">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  PERN
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Kafka
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Redis
                </span>
              </div>

              <p className="text-gray-400 mb-4">Group Chat</p>
              <div className="space-y-4">
                <p className="text-gray-300">Built a real-time chat App</p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Socket.io implementation
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    AWS cloud deployment
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex gap-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 opacity-50 cursor-not-allowed">
                  View Demo
                </button>
                <Link
                  href={"https://github.com/modnarayan/quick-chat"}
                  target="_blank"
                >
                  {" "}
                  <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Project 3 --> */}
          <div className="group bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-blue-500 transition-all duration-300 animate__animated animate__fadeInLeft">
            <div className="relative p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Saas Cloudinary
              </h3>
              <div className="flex flex-col gap-2 mt-2 md:absolute md:top-0 md:right-0 md:mt-4 md:mr-4 md:flex-row text-center">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Cloudinary API
                </span>
              </div>

              <p className="text-gray-400 mb-4">Full Stack Application</p>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Compress video and convert images sizes as social media.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    CI/CD Pipeline
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Docker containerization
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex gap-4">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 opacity-50 cursor-not-allowed">
                  View Demo
                </button>
                <Link
                  href={"https://github.com/modnarayan/Saas-cloudinary"}
                  target="_blank"
                >
                  <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">
                    Code
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* <!-- Project 4 --> */}
          <div className="group bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 hover:border-blue-500 transition-all duration-300 animate__animated animate__fadeInRight">
            <div className="relative p-6">
              <h3 className="text-xl font-bold text-white mb-2">E-Academy</h3>
              <div className="flex flex-col gap-2 mt-2 md:absolute md:top-0 md:right-0 md:mt-4 md:mr-4 md:flex-row text-center">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  MERN
                </span>
              </div>
              <p className="text-gray-400 mb-4">Online Classes</p>
              <div className="space-y-4">
                <p className="text-gray-300">
                  E-Academy FullStack application that uses the RazorPay API to
                  process payments.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Express.js REST APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Payment Integration
                  </li>
                </ul>
              </div>
              <div className="mt-6 flex gap-4 md:flex-row flex-col">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 opacity-50 cursor-not-allowed">
                  View Demo
                </button>
                <Link
                  href="https://github.com/modnarayan/E-Academy-Frontend"
                  target="_blank"
                >
                  <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-500 transition-colors duration-300">
                    Frontend Code
                  </button>
                </Link>

                {/* Backend Link */}
                <Link
                  href="https://github.com/modnarayan/E-Academy-backend"
                  target="_blank"
                >
                  <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors duration-300">
                    Backend Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
