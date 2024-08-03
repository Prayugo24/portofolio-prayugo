"use client";
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
         <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="empty-4 text-secondary text-[17px] max-w-6xl leading-[30px] text-justify text-white"
        >
          <p className="indent-8">
          Hello, I'm Prayugo Dwi Setiyoko, commonly known as Yugo. I am a seasoned Web Developer and Software Engineer based in Jakarta, Indonesia. With a Bachelor of Technology in Computer Information Systems and a minor in Augmented Reality from Universitas Teknologi Yogyakarta, I bring a robust educational background and a passion for technology to every project I undertake.
          </p><br />
          <p className="indent-8">
            Throughout my career, I have gained substantial experience working with leading companies such as Allianz Life Indonesia, Moladin Digital Indonesia, VIVA Media Baru, and Podjok Celebes Mandiri. My roles have allowed me to develop a comprehensive skill set in software engineering, with a focus on web development, API management, and system optimization.
          </p><br />
          <p className="indent-8">
            At Allianz Life Indonesia, my current role involves analyzing and refactoring business logic, developing functionalities for the Claim Auto Adjudication (CAA) system, modernizing core systems, and optimizing code. I collaborate with teams to ensure seamless project execution, create unit tests for functionality tasks, and troubleshoot production issues. My tech stack here includes Typescript, Java Spring Boot, Jasper Report, Microservices, Oracle Database, and AWS EC2.
          </p><br />
          <p className="indent-8">
            Previously, as a Software Engineer II at Moladin Digital Indonesia, I built and maintained new warehouse management products, assisted new software engineers, conducted code reviews, and implemented features using Test-Driven Development (TDD). My expertise here extended to deploying code across development, staging, and production environments, and my tech stack included Typescript, React.js, Node.js, Kafka, MariaDB, Docker, and GCP.
          </p><br />
          <p className="indent-8">
            At VIVA Media Baru, I was instrumental in designing, building, and deploying code for various websites and APIs, optimizing data structures, and ensuring the secure and efficient running of website servers. I also created and maintained APIs using Node.js and implemented solutions for push notifications and reader count tracking with Firebase. My tech stack included Laravel, MongoDB, Golang, Redis, and AWS.
          </p><br />
          <p className="indent-8">
            In my early career at Podjok Celebes Mandiri, I focused on creating and maintaining APIs for domestic and international flights, deploying code, and maintaining legacy systems. I worked extensively with Lumen, WSO2, and Android development using Kotlin.
          </p><br />
          <p className="indent-8">
            My technical expertise spans a wide array of languages and technologies, including PHP, React.js, Python, Node.js, JavaScript, Typescript, Flask, MongoDB, MySQL, PostgreSQL, Redis, Java Android, Google Cloud Platform, WSO2 ESB, Jira, Trello, and various Java Spring frameworks. I am a fervent believer in continuous learning and strive to keep up with the latest technological advancements. My passion for programming is driven by a desire not only to solve complex problems but also to acquire new knowledge and connect with like-minded professionals.
          </p><br />
          <p className="indent-8">
            Outside of work, I enjoy playing video games, watching movies, and exploring new topics like history and philosophy. I am also learning to play the guitar, which adds a creative balance to my technical pursuits.
          </p><br />
          <p className="indent-8">
            I am currently seeking new opportunities to leverage my skills and experience in a challenging and dynamic environment. Let's connect and explore how we can collaborate to create innovative and impactful solutions.
          </p><br />
        </motion.div>

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
};

export default About;
