"use client"

import { SectionWrapper } from "@/interfaces/animation/sectionWrapper/sectionWrapper"
import ProjectCard from "@/interfaces/components/portofolio/projectCard"
import { styles } from "@/styles/styles"
import { PROJECTS } from "@/utils/constants"
import { fadeIn, textVariant } from "@/utils/motions"
import { motion } from "framer-motion"

const Portofolio = () => {
    return(
        <SectionWrapper>
        <>
          {/* Title */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Work</p>
            <h2 className={styles.sectionHeadText}>Projects.</h2>
          </motion.div>
  
          {/* About */}
          <div className="w-full flex text-white">
            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-white"
            >
              Following projects showcases my skills and experience through
              real-world examples of my work. Each project is briefly described
              with links to code repositories and live demos in it. It reflects my
              ability to solve complex problems, work with different technologies,
              and manage projects effectively.
            </motion.p>
          </div>
  
          {/* Project Card */}
          <div className="mt-20 flex flex-wrap gap-7">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={`project-${i}`} index={i} {...project} />
            ))}
          </div>
        </>
      </SectionWrapper>
    )
}

export default Portofolio