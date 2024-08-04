import { preview, github } from "@/assets";
import { PROJECTS_BLOG } from "@/utils/constants";
import { fadeIn } from "@/utils/motions";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";

type BlogCardProps = (typeof PROJECTS_BLOG)[number] & {
    index: number;
};

const BlogCardS = ({
    index,
    title,
    description,
    tags,
    image,
    source_code_link,
    live_site_link,
}: BlogCardProps) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="flex justify-center"
        >
            <Tilt
                options={{
                    max: 25,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-4 rounded-lg sm:w-[300px] md:w-[360px] w-full shadow-lg"
            >
                <div className="relative w-full h-[200px]">
                    {/* Work image */}
                    <Image
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover rounded-lg"
                    />

                    {/* Live Site */}
                    <div className="absolute inset-0 flex justify-end m-2 card-img_hover">
                        <div
                            onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
                            className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <Image
                                src={preview}
                                alt="Live Site"
                                title="Live Site"
                                className="w-2/3 h-2/3 object-contain"
                            />
                        </div>

                        {/* Github */}
                        <div
                            onClick={() =>
                                window.open(source_code_link, "_blank", "noreferrer")
                            }
                            className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer ml-2"
                        >
                            <Image
                                src={github}
                                alt="Github"
                                title="Github"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Work Info */}
                <div className="mt-3 text-white">
                    <h3 className="text-white font-bold text-lg">{title}</h3>
                    <p className="mt-1 text-secondary text-sm">{description}</p>
                </div>

                {/* Work Tag */}
                <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag, tagIdx) => (
                        <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-sm")}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

export default BlogCardS;
