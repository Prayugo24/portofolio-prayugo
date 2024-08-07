"use client"
import { SERVICES } from "@/utils/constants";
import { fadeIn } from "@/utils/motions";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Tilt } from "react-tilt";

type ServiceCardProps = {
    title: string;
    icon: StaticImageData;
    index: number;
  };
  
const AboutCards = ({ title, icon, index }: ServiceCardProps) => {
    return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="xs:w-[250px] w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
};
export default AboutCards


