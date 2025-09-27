import {
  Code2,
  Database,
  Globe,
  Server,
  Smartphone,
  Zap,
  Flame,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const skillRings = [
  // Core Technologies (Inner Ring)
  [
    { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
    { name: "TypeScript", icon: Code2, color: "text-blue-400" },
    { name: "React", icon: Smartphone, color: "text-cyan-400" },
    { name: "Node.js", icon: Server, color: "text-green-400" },
    { name: "React Native", icon: Smartphone, color: "text-green-400" },
    { name: "Nest.js", icon: Flame, color: "text-red-400" },
  ],
  // Frameworks & Libraries (Middle Ring)
  [
    { name: "Next.js", icon: Globe, color: "text-purple-400" },
    { name: "Express", icon: Server, color: "text-orange-400" },
    { name: "MongoDB", icon: Database, color: "text-green-500" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-500" },
    { name: "GraphQL", icon: Zap, color: "text-pink-400" },
    { name: "Docker", icon: Code2, color: "text-blue-300" },
  ],
  // Tools & Services (Outer Ring)
  [
    { name: "AWS", icon: Globe, color: "text-orange-300" },
    { name: "Git", icon: Code2, color: "text-red-400" },
    { name: "Python", icon: Code2, color: "text-yellow-300" },
    { name: "REST API", icon: Zap, color: "text-emerald-400" },
    { name: "Microservices", icon: Server, color: "text-violet-400" },
    { name: "CI/CD", icon: Zap, color: "text-indigo-400" },
    { name: "Redis", icon: Database, color: "text-red-300" },
    { name: "Kubernetes", icon: Globe, color: "text-blue-600" },
  ],
];

const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ringRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rings = ringRefs.current;
    const angles = new Array(rings.length).fill(0);
    let animationId: number;

    function animate() {
      rings.forEach((ring, ringIndex) => {
        if (!ring) return;

        const children = Array.from(ring.children);
        const baseRadius = 80 + ringIndex * 60; // Different radius for each ring
        const step = (2 * Math.PI) / children.length;

        // Different rotation speeds for each ring
        const speed = isHovered ? 0.001 : 0.004 + ringIndex * 0.002;
        angles[ringIndex] += speed;

        children.forEach((child, i) => {
          const angle = angles[ringIndex] + i * step;
          const x = baseRadius * Math.cos(angle);
          const y = baseRadius * Math.sin(angle) * 0.6; // Flatten the sphere slightly
          const z = baseRadius * Math.sin(angle) * 0.3; // Add depth

          const element = child as HTMLElement;
          element.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;

          // Add scale based on z-position for depth effect
          const scale = 0.8 + (z + baseRadius) / (baseRadius * 4);
          element.style.opacity = (
            0.6 +
            (z + baseRadius) / (baseRadius * 2)
          ).toString();
          element
            .querySelector(".skill-icon")
            ?.setAttribute("style", `transform: scale(${scale})`);
        });
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isHovered]);

  const arr = [
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Nest.js",
    "Express.js",
    "MongoDB",
    "Postgresql",
    "Docker",
    "AWS",
  ];

  useEffect(() => {
    const rings = ringRefs.current;
    const radius = 300;
    const step = (2 * Math.PI) / 4;
    // @typescript-eslint/no-unused-var
    rings.forEach((ring) => {
      if (!ring) return;
      const children = Array.from(ring.children);
      children.forEach((child, i) => {
        const angle = i * step;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        (child as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    });

    const angles = new Array(rings.length).fill(0);
    function animate() {
      rings.forEach((ring, idx) => {
        if (!ring) return;
        const children = Array.from(ring.children);
        const step = (2 * Math.PI) / children.length;
        angles[idx] += 0.005 + idx * 0.005;
        children.forEach((child, i) => {
          const angle = angles[idx] + i * step;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          (child as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
        });
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

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
                3+ years of experience in building modern web applications
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

          {/* Multi-ring rotating skill sphere
          <div className="relative flex justify-center items-center">
            <div className="relative w-[350px] h-[350px] flex items-center justify-center">
              {skillRings.map((ring, ringIndex) => (
                <div
                  key={ringIndex}
                  ref={(el) => {
                    ringRefs.current[ringIndex] = el;
                  }}
                  className="absolute w-full h-full flex items-center justify-center"
                >
                  {ring.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={i}
                        className="absolute text-blue-400 text-sm font-medium flex flex-col items-center"
                      >
                        <Icon className="w-6 h-6 mb-1" />
                        {skill.name}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div> */}
          <div className="relative flex justify-center items-center">
            <div
              ref={containerRef}
              className="relative w-[400px] h-[400px] flex items-center justify-center perspective-1000"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Central glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />

              {/* Central core */}
              <div className="absolute w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50 z-10 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>

              {skillRings.map((ring, ringIndex) => (
                <div
                  key={ringIndex}
                  ref={(el) => {
                    ringRefs.current[ringIndex] = el;
                  }}
                  className="absolute w-full h-full flex items-center justify-center"
                >
                  {ring.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={i}
                        className="absolute flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110"
                      >
                        <div className="skill-icon p-2 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700 group-hover:border-blue-400/60 transition-all duration-300 shadow-lg">
                          <Icon
                            className={`w-5 h-5 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                          />
                        </div>
                        <span
                          className={`text-xs font-medium mt-1 ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                        >
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}

              {/* Orbital rings visualization */}
              {skillRings.map((_, ringIndex) => (
                <div
                  key={`ring-${ringIndex}`}
                  className="absolute border border-gray-700/30 rounded-full"
                  style={{
                    width: `${(80 + ringIndex * 60) * 2}px`,
                    height: `${(80 + ringIndex * 60) * 1.2}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
