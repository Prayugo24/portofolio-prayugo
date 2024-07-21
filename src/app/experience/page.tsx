"use client"
import ExperienceCard from "@/interfaces/components/experience/experienceCard";
import { SectionWrapper } from "@/interfaces/hooks/animation/sectionWrapper";
import { styles } from "@/styles/styles";
import { EXPERIENCES } from "@/utils/constants";
import { textVariant } from "@/utils/motions";
import { motion } from "framer-motion";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";


const Experience = () => {
    return (
      <>
      <SectionWrapper idName="work">
        <>
          {/* Title */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What I have done so far</p>
            <h2 className={styles.sectionHeadText}>Work Experience.</h2>
          </motion.div>
  
          {/* Experience Card */}
          <div className="mt-20 flex flex-col">
            <VerticalTimeline>
              {
              EXPERIENCES.map((experience,index) => (
                <ExperienceCard key={experience.title + index} experience={experience} />
              ))}
            </VerticalTimeline>
          </div>
        </>
      </SectionWrapper>
      </>
    );

};
  
export default Experience;