import React from "react";
import "../styles/home.scss";
import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <motion.h2
          initial={{
            x: "-100%",
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          Satyaswarupa Parida
        </motion.h2>
        <motion.p
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          Brings ideas to life with code!
        </motion.p>
        <motion.p
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
        >
          MERN Developer || Frontend Developer || Designer
        </motion.p>
        <div className="social">
          <motion.a href="https://wa.me/+917008671443"
            className="icons"
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a href="https://github.com/Satyaswarupa"
            className="icons"
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
            <FaGithub />
          </motion.a>
          <motion.a href="https://www.instagram.com/rabble_razz/"
            className="icons"
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 2.9,
            }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/satyaswarupa/"
            className="icons"
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 3,
            }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
        <div className="buttons">
          <motion.a
            href="mailto:satyaswarupaparida130@gmail.com"
            className="btn"
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 3.5,
            }}
          >
            Hire Me
          </motion.a>
          <motion.a
            href="https://github.com/Satyaswarupa" // Change to your projects section or link
            className="btn"
            initial={{
              y: "-100%",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 4,
            }}
          >
            GitHub
          </motion.a>
        </div>
      </div>
      <Navbar />
      <div className="line"></div>
    </div>
  );
};

export default Home;
