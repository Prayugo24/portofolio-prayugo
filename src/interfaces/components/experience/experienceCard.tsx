
"use client"
import { EXPERIENCES } from "@/utils/constants";
import { useState } from "react";
import Image from 'next/image';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

type ExperienceCardProps = {
    experience: (typeof EXPERIENCES)[number];
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{ background: "#1d1836", color: "#fff", transition: "background 0.6s ease-in-out, color 0.6s ease-in-out" }}
      contentArrowStyle={{ borderRight: "7px solid #232631", transition: "border-right 0.6s ease-in-out" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, transition: "background 0.6s ease-in-out" }}
      icon={
        <div
          className="flex justify-center items-center w-full h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain transition-transform duration-600 ease-in-out"
            style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
          />
        </div>
      }
    >
      {/* Title */}
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {/* Experience Points */}
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, i) => (
          <li
            key={`experience-point-${i}`}
            className={`text-white-100 text-[14px] pl-1 tracking-wider transition-all duration-600 ease-in-out ${isHovered ? 'font-bold' : ''}`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard