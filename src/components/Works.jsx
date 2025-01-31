import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, web } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link, code_link }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.09 }} // 👈 Hover Animation: Slight Scale Up
      transition={{ duration: 0.2 }}
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:shadow-lg'
    >
      <div className='relative w-full h-[230px]'>
        <img src={image} alt='project_image' className='w-full h-full object-cover rounded-2xl' />

        <div className='absolute inset-0 flex justify-end m-3'>
          <a 
            href={source_code_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 p-2 bg-black rounded-full flex justify-center items-center transition-all hover:bg-gray-700"
          >
            <img src={github} alt='source code' className='w-1/2 h-1/2' />
          </a>
          <a 
            href={code_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 p-2 bg-black rounded-full flex justify-center items-center ml-2 transition-all hover:bg-gray-700"
          >
            <img src={web} alt='live demo' className='w-1/2 h-1/2' />
          </a>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag, index) => (
          <span key={`${name}-${index}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Following projects showcase my skills and experience through real-world examples of my work.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
