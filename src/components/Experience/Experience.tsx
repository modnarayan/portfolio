import Link from "next/link";
import { Check } from "lucide-react";

const Experience = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Mod_Narayan_Singh_2.6_years.pdf";
    link.download = "Mod_Narayan_Singh_dev_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="experience" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 ">
          <h2 className="text-3xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-neutral-700"></div>

          <div className="space-y-16">
            <div className="relative ">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              </div>
              <div className="ml-4 lg:ml-auto lg:w-1/2 lg:pr-8">
                <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-blue-500 transition-colors duration-300">
                  <div className="flex flex-wrap justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">
                      Frontend Developer
                    </h3>
                    <span className="text-blue-500">2021 - Present</span>
                  </div>

                  <Link href={`https://customers.ameritfleet.com/`}>
                    <h4 className="text-lg text-blue-400 mb-4">
                      Amerit Fleet Solutions
                    </h4>
                  </Link>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Check className="text-blue-600" />
                      Led frontend development for Vendor &amp; Customer Portal
                      using React.js and Next.js
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-blue-600" />
                      Implemented real-time features using WebSocket and
                      Socket.io
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-blue-600" />
                      Improved application performance by 20% through
                      optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-1">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              </div>
              <div className="ml-4 lg:ml-8 lg:w-1/2">
                <div className="bg-neutral-800 p-6 rounded-lg border border-neutral-700 hover:border-blue-500 transition-colors duration-300">
                  <div className="flex flex-wrap justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">
                      Full Stack Developer
                    </h3>
                    <span className="text-blue-500">April 2022 - Oct 2022</span>
                  </div>
                  <h4 className="text-lg text-blue-400 mb-4">DCT Academy</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <Check className="text-blue-600" />
                      Developed full-stack applications using MERN stack
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-blue-600" />
                      Implemented CI/CD pipelines using GitHub Actions
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-blue-600" />
                      Deployed applications using Docker and AWS services
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={handleDownload}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
