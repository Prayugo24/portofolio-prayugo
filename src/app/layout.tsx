import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import type { PropsWithChildren } from "react";
import { cn } from "@/utils/utils";
import { Navbar } from "@/interfaces/components/home/navbar/navbar";
import { StarsCanvas } from "@/interfaces/components/home/starsCanvas/starsCanvas";
import { Metadatas } from "@/utils/metadata";


const inter = Inter({ subsets: ["latin"] });
export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = Metadatas;


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}>
          {/* <StarsCanvas/> */}
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
