"use client"
import { SectionWrapper } from "@/interfaces/animation/sectionWrapper/sectionWrapper";
import AboutCards from "@/interfaces/components/about/aboutCard";
import SkillsCard from "@/interfaces/components/about/skillsCard";
import { styles } from "@/styles/styles";
import { SERVICES } from "@/utils/constants";
import { fadeIn, textVariant } from "@/utils/motions";
import { motion } from "framer-motion";

const About = () => {
  return (
    <SectionWrapper idName="about">
      <>
        {/* Title */}
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        {/* Body */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="empty-4 text-secondary text-[17px] max-w-6xl leading-[30px] text-white">
          After graduating with a degree in Accounting, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned full-stack web development. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is React, Next.js, Node.js, and MongoDB. I am also familiar with TypeScript and Prisma. I am always looking to learn new technologies. I am currently looking for a full-time position as a software developer.
          When I'm not coding, I enjoy playing video games, watching movies, and playing with my dog. I also enjoy learning new things. I am currently learning about history and philosophy. I'm also learning how to play the guitar.
        </motion.p>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <AboutCards key={`${service.title}-${i}`} index={i} {...service} />
          ))}
        </div>
        <SkillsCard></SkillsCard>
      </>
    </SectionWrapper>
  );
}

export default About
