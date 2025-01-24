"use client";

import { useEffect, useState } from "react";
import About from "@/components/About/About";
import HomePage from "@/components/Home/Home";
import Navbar from "@/components/NavBar/Navbar";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
    <Navbar activeSection={activeSection} />
    <main className="flex flex-col w-full bg-black">
      <HomePage />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
    </>
  );
}
