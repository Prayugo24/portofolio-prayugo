import { preview , github} from "@/assets";
import { PROJECTS } from "@/utils/constants";
import { fadeIn } from "@/utils/motions";
import { cn } from "@/utils/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";

type ProjectCardProps = (typeof PROJECTS)[number] & {
    index: number;
};

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    live_site_link,
}:ProjectCardProps) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
          <Tilt
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            style={{ backgroundColor: 'rgba(0, 255, 0, 0.12)' }}
          >
            <div className="relative w-full h-[230px]">
              {/* Work image */}
              <Image
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Live Site */}
              <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div
                  onClick={() => window.open(live_site_link, "_blank", "noreferrer")}
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
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
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2"
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
            <div className="mt-5 text-white">
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>

            {/* Work Tag */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, tagIdx) => (
                <p key={`Tag-${tagIdx}`} className={cn(tag.color, "text-[14px]")}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </Tilt>
        </motion.div>
    )
}

export default ProjectCard