"use client"
import { useState } from "react";
import BlogCard from "@/interfaces/components/blog/blogCard";
import { SectionWrapper } from "@/interfaces/animation/sectionWrapper/sectionWrapper";
import { PROJECTS_BLOG, CATEGORIES } from "@/utils/constants";
import { FaChevronRight, FaBars, FaTimes } from "react-icons/fa"; // Import icons



const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
    const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu
  
  
  const filteredProjects = PROJECTS_BLOG.filter(category =>
    category.category === selectedCategory
  );

  return (
    <SectionWrapper idName="blog">
      <div className="flex flex-col lg:flex-row">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex justify-between items-center bg-gray-800 text-white w-full">
          <button className="flex items-center w-full p-4" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <>
                <FaTimes className="text-2xl mr-2" /> Menu
              </>
            ) : (
              <>
                <span className="text-2xl mr-2">{'>'}</span> Menu
              </>
            )}
          </button>
        </div>

        {/* Sidebar */}
        <aside className={`lg:w-64 text-white lg:block ${menuOpen ? "block" : "hidden"} lg:bg-transparent`}>
          <div className="px-0 py-4 overflow-y-auto bg-transparent lg:bg-transparent"> {/* Remove padding */}
            <ul className="space-y-2">
              {CATEGORIES.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center justify-between w-full p-2 text-base font-normal text-white border-2 rounded-lg ${
                      selectedCategory === category ? "bg-green-200 bg-opacity-30" : "bg-transparent"
                    } hover:bg-green-200 hover:bg-opacity-30`}
                    style={{
                      borderColor: "#008000", // Bright green border
                    }}
                  >
                    <span className="text-white">{category}</span>
                    <FaChevronRight className="text-white" /> {/* Add the icon */}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="mt-4 flex flex-wrap gap-4">
            {filteredProjects.map((project, i) => (
              <div key={`project-${i}`} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <BlogCard index={i} {...project} />
            </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Blog;
