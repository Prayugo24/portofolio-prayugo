"use client"
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import type { PropsWithChildren } from "react";
import { cn } from "@/utils/utils";
import { Navbar } from "@/interfaces/components/navbar/navbar";
import { StarsCanvas } from "@/interfaces/animation/starsCanvas/starsCanvas";
import { Metadatas } from "@/utils/metadata";
import { Transition } from "@/interfaces/animation/transition/transition";
import { ParticlesContainer } from "@/interfaces/animation/particlesContainer/particlesContainer";
import { motion,AnimatePresence } from "framer-motion";



const inter = Inter({ subsets: ["latin"] });
export const viewport: Viewport = {
  themeColor: "#030014",
};

// export const metadata: Metadata = Metadatas;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        {/* <Transition /> */}
        <StarsCanvas />
        <ParticlesContainer/>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
