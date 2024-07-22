"use client";
import { motion } from "framer-motion";

import { styles } from "@/styles/styles";
import { cn } from "@/utils/utils";
import { staggerContainer } from "@/utils/motions";

type SectionWrapperProps = {
  children: React.ReactNode;
  idName?: string;
};

export const SectionWrapper = ({ children, idName }: SectionWrapperProps) => (
  <motion.section
    variants={staggerContainer()} // Fungsi yang mengembalikan varian animasi
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={cn(styles.padding, "max-w-7xl mx-auto relative z-0")}
  >
    <span className="hash-span" id={idName}>
      &nbsp;
    </span>
    {children}
  </motion.section>
);
