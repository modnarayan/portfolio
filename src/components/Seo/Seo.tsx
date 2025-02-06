"use client";

import { useEffect } from "react";

export default function Seo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mod Narayan Singh",
      url: "https://modnarayan.com",
      jobTitle: "Full Stack Developer",
      sameAs: [
        "https://www.linkedin.com/in/your-profile",
        "https://github.com/your-github",
      ],
    });
    document.head.appendChild(script);
  }, []);

  return null;
}
