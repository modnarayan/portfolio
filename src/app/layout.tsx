import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Seo from "@/components/Seo/Seo";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mod Narayan Singh | Full Stack Developer | Frontend Developer",
  description:
    "MERN Stack Developer specializing in React, Node.js, and Next.js.",
  keywords: [
    "Mod Narayan Singh",
    "Full Stack Developer",
    "Frontend Developer",
    "MERN Developer",
    "Next.js",
    "React",
    "Node.js",
  ],
  openGraph: {
    title: "Mod Narayan Singh | Full Stack Developer | Frontend Developer",
    description:
      "MERN Stack Developer specializing in React, Node.js, and Next.js.",
    url: "https://modnarayan.com",
    siteName: "Mod Narayan Singh",
    type: "profile", // Correct way to set OpenGraph profile type
    images: [
      {
        url: "/modnarayan.jpg", // Change this to an actual OpenGraph image
        width: 1200,
        height: 630,
        alt: "Mod Narayan Singh - Full Stack Developer",
      },
    ],
  },
  alternates: {
    canonical: "https://modnarayan.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Seo />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          <meta
            name="google-site-verification"
            content="fMDJ0foe7QibtSed0-eK9eKaZYQK3huqBYTFvNRiBFY"
          />
        </Head>
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
