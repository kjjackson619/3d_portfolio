import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles.js';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion.js';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {

  const defaultOptions = {
    max: 45,
    scale: 1, 
    speed: 450
  };

  return(
  <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
    <Tilt options={defaultOptions}>
      <div className="xs:w-[250px] w-full">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a highly motivated individual with a strong desire to learn and grow in the field of software development. My curiousity for problem solving are what drew me to the world of coding in the first place. Since, I have dedicated myself to mastering the craft. <br />
        <br />
        I have honed my skills through countless hours of practice, constantly seeking out new challenges and opportunites to improve. I take pride in delivering high-quality code that meets the needs of my users. Above all, I am striving to use technology to make a positive impact.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");