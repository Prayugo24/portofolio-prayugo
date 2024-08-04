
"use client"
import { BlogCard } from "@/interfaces/components/blog/blogCard";
import { BLOGS } from "@/utils/constants";
import { motion } from "framer-motion"
import { fadeIn, textVariant } from "@/utils/motions"

const Blog = () => {
    return (
        <section
          id="projects"
          className="flex flex-col items-center justify-center py-20"
        >
            <motion.div variants={textVariant()}>
                
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Blogs
                </h1>
            </motion.div>
          <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
            
            {BLOGS.map((project) => (
              <BlogCard
                key={project.title}
                src={project.image as any}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </section>
      );
};

export default Blog