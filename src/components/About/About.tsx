import { Check } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 ">
        <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="bg-neutral-700/50 p-6 rounded-lg border border-neutral-600">
            <h3 className="text-xl font-semibold text-white mb-4">Professional Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              Dynamic Full Stack Developer with 2.6+ years of experience in designing and developing scalable web applications. Specializing in MERN stack development with a strong focus on creating high-performance, user-centric solutions.
            </p>
          </div>

          <div className="bg-neutral-700/50 p-6 rounded-lg border border-neutral-600">
            <h3 className="text-xl font-semibold text-white mb-4">Technical Expertise</h3>
            <p className="text-gray-300 leading-relaxed">
              Proficient in modern frontend technologies including React.js, Next.js, and TypeScript. Strong backend capabilities with Node.js, Express.js, and database management systems. Experienced in implementing real-time features using WebSocket and Socket.io.
            </p>
          </div>

          <div className="bg-neutral-700/50 p-6 rounded-lg border border-neutral-600">
            <h3 className="text-xl font-semibold text-white mb-4">Professional Impact</h3>
            <p className="text-gray-300 leading-relaxed">
              Successfully led frontend development for Amerit Fleet Solutions&apos; Vendor &amp; Customer Portal, enhancing user engagement and streamlining business workflows. Achieved 20% improvement in application load speeds through optimization techniques.
            </p>
          </div>
        </div>

        <div className="space-y-8 Right">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Key Achievements</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className='w-4 h-4 text-blue-500' />
                </div>
                <div>
                  <h4 className="text-white font-medium">Performance Optimization</h4>
                  <p className="text-gray-400">Improved application load speeds by 20% through efficient state management and optimization techniques</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className='w-4 h-4 text-blue-500' />
                </div>
                <div>
                  <h4 className="text-white font-medium">Cloud Infrastructure</h4>
                  <p className="text-gray-400">Implemented scalable solutions using Docker, Kubernetes, and AWS services</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className='w-4 h-4 text-blue-500' />
                </div>
                <div>
                  <h4 className="text-white font-medium">Team Leadership</h4>
                  <p className="text-gray-400">Led frontend development teams and mentored junior developers in best practices</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-neutral-700 text-white rounded-full text-sm">Problem Solving</span>
            <span className="px-4 py-2 bg-neutral-700 text-white rounded-full text-sm">Team Leadership</span>
            <span className="px-4 py-2 bg-neutral-700 text-white rounded-full text-sm">Agile Development</span>
            <span className="px-4 py-2 bg-neutral-700 text-white rounded-full text-sm">Code Quality</span>
            <span className="px-4 py-2 bg-neutral-700 text-white rounded-full text-sm">Performance Optimization</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About