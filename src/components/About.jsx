import React from 'react'
import "../styles/about.scss";
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="about">
      <div className="about2">
      <div className="left">
        <motion.h3     initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}>M</motion.h3>
        <motion.h3     initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}>E</motion.h3>
        <motion.h3     initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}>R</motion.h3>
        <motion.h3     initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}>N</motion.h3>
        <motion.h4     initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}>Developer</motion.h4>
      </div>
      <div className="right">
      <motion.p  initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}>
        Hello! I'm Satyaswarupa Parida, a MERN Developer, Frontend Developer, and Designer based in Odisha. I specialize in creating dynamic, responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern front-end technologies like HTML5, CSS3, and JavaScript (ES6+). My design skills in Adobe Photoshop, Illustrator, and Figma ensure visually appealing interfaces. With experience on various projects, I bridge the gap between design and development for functional, user-friendly results. Constantly learning and staying updated with industry trends, I enjoy exploring new design trends, contributing to open-source, and continuous learning.
      </motion.p>
      </div>
      </div>
    </div>
  )
}

export default About