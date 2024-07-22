"use client"
import { SectionWrapper } from "@/interfaces/animation/sectionWrapper/sectionWrapper";
import AboutCards from "@/interfaces/components/about/aboutCard";
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
          className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-white"
        >
          I'm a skilled website developer with experience in TypeScript and
          Javascript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>

        {/* Service Card */}
        <div className="mt-20 flex flex-wrap gap-10">
          {SERVICES.map((service, i) => (
            <AboutCards key={`${service.title}-${i}`} index={i} {...service} />
          ))}
        </div>
      </>
    </SectionWrapper>
  );
}

export default About
