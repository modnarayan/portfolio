import { MonitorSmartphoneIcon } from 'lucide-react'
import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 animate__animated animate__fadeInLeft">
          <div className="bg-neutral-700/50 p-6 rounded-lg border border-neutral-600">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <MonitorSmartphoneIcon className="w-6 h-6 text-blue-500" />
              Frontend Technologies
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">React.js / Next.js</span>
                  <span className="text-blue-400">91%</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full w-11/12"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">JavaScript</span>
                  <span className="text-blue-400">91%</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full w-11/12"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">TypeScript</span>
                  <span className="text-blue-400">80%</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Redux / Zustand</span>
                  <span className="text-blue-400">80%</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Tailwind CSS / Material-UI</span>
                  <span className="text-blue-400">90%</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full w-10/12"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-700/50 p-6 rounded-lg border border-neutral-600">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
              Backend Development
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">Node.js / Express.js</span>
                  <span className="text-blue-400">80%</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full w-4/5"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-300">MongoDB / PostgreSQL</span>
                  <span className="text-blue-400">75%</span>
                </div>
                <div className="h-2 bg-neutral-600 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-neutral-700/50 p-6 rounded-lg border border-neutral-600">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
              </svg>
              DevOps &amp; Cloud
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-600/50 p-4 rounded-lg">
                <div className="text-blue-400 font-medium mb-2">Docker</div>
                <div className="text-sm text-gray-300">Container Platform</div>
              </div>
              <div className="bg-neutral-600/50 p-4 rounded-lg">
                <div className="text-blue-400 font-medium mb-2">Kubernetes</div>
                <div className="text-sm text-gray-300">Orchestration</div>
              </div>
              <div className="bg-neutral-600/50 p-4 rounded-lg">
                <div className="text-blue-400 font-medium mb-2">AWS</div>
                <div className="text-sm text-gray-300">Cloud Services</div>
              </div>
              <div className="bg-neutral-600/50 p-4 rounded-lg">
                <div className="text-blue-400 font-medium mb-2">CI/CD</div>
                <div className="text-sm text-gray-300">GitHub Actions</div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-700/50 p-6 rounded-lg border border-neutral-600">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Tools &amp; Others
            </h3>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">Git</span>
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">ESLint</span>
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">Prettier</span>
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">NPM</span>
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">Webpack</span>
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">Babel</span>
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">Socket.io</span>
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">WebSocket</span>
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">Yarn</span>
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">Next-Auth</span>
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">Jira</span>
              <span className="px-4 py-2 bg-neutral-600/50 text-gray-300 rounded-full text-sm">JWT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills