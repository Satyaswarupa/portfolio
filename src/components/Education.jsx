import React from "react";
import { motion } from "framer-motion";
import "../styles/education.scss";

const Education = () => {
  return (
    <motion.div 
      className="edu"
      initial={{
        y: "-100%",
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.9,
      }}
    >
      
      <motion.div 
        className="edu1"
        initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
            y: 0,
            opacity: 1,
          }}
        transition={{
          duration: 1.4,
        }}
      >
        <h2>2021-2022</h2>
        <h4>Bhadrak autonomous college</h4>
        <p>Msc computer science</p>
      </motion.div>
      <motion.div 
        className="edu2"
        initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
            y: 0,
            opacity: 1,
          }}
        transition={{
          duration: 1.8,
        }}
      >
        <h2>2017-2020</h2>
        <h4>Bhadrak autonomous college</h4>
        <p>BCA</p>
      </motion.div>
      <motion.div 
        className="edu3"
        initial={{
          y: "-100%",
          opacity: 0,
        }}
        whileInView={{
            y: 0,
            opacity: 1,
          }}
        transition={{
          duration: 2.3,
        }}
      >
        <h2>2015-2017</h2>
        <h4>Vinayak college of science and commerce</h4>
        <p>+2 science</p>
      </motion.div>
    </motion.div>
  );
};

export default Education;