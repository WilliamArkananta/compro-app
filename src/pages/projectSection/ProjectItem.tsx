import { motion } from "framer-motion";

interface ProjectItemProps {
  pathImg: string;
  title: string;
  description: string;
}

function ProjectItem({ pathImg, title, description }: ProjectItemProps) {
  return (
    <motion.div
      className="project-item relative flex items-center justify-center cursor-pointer w-[366px] h-full bg-glass-bg backdrop-blur-12 rounded-2xl p-4"
      whileHover="hover"
    >
      <motion.img
        variants={{
          hover: {
            opacity: 1,
          },
        }}
        transition={{ duration: 0.3 }}
        className="w-full h-full object-cover rounded-lg"
        src={pathImg}
        alt="Project 1"
      />
      <motion.div
        className="text flex flex-col justify-center items-center absolute bottom-0 left-0 w-full h-full bg-glass-bg backdrop-blur-12 rounded-2xl gap-2 p-6"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        variants={{
          hover: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              duration: 0.3,
            },
          },
        }}
      >
        <h4 className="text-h4 font-semibold text-white text-center">
          {title}
        </h4>
        <p className="text-xs font-normal text-white text-center">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default ProjectItem;
