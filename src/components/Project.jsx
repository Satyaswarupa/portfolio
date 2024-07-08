import React from "react";
import { MdOutlineWifiTethering } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { motion } from "framer-motion";
import "../styles/project.scss";

const Project = () => {
  return (
    <div id="project">
      <motion.div 
        className="card" 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card-content">
          <div className="name">Digital signature</div>
          <div className="description">
            <p>Create your digital sign and download</p>
            <div className="buttons">
              <a href="https://digital-signatures.vercel.app/" className="button-4"><MdOutlineWifiTethering /></a>
              <a href="https://github.com/Satyaswarupa/signature" className="button-4"><IoCodeSlash /></a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="card" 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="card-content">
          <div className="name">Qr code generator</div>
          <div className="description">
            <p>paste any link to create qr code</p>
            <div className="buttons">
              <a href="https://qr-code-generator-by-bca.vercel.app/" className="button-4"><MdOutlineWifiTethering /></a>
              <a href="https://github.com/Satyaswarupa/Qr-code-generator" className="button-4"><IoCodeSlash /></a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="card" 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="card-content">
          <div className="name">Crypto react</div>
          <div className="description">
            <p>see the current price of crypto coin and there graph</p>
            <div className="buttons">
              <a href="https://satyaswarupa.github.io/crypto-react/" className="button-4"><MdOutlineWifiTethering /></a>
              <a href="https://github.com/Satyaswarupa/crypto-react" className="button-4"><IoCodeSlash /></a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="card" 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="card-content">
          <div className="name">Text to speech</div>
          <div className="description">
            <p>paste or type any word or paragraph to speach</p>
            <div className="buttons">
              <a href="https://text-speech-gray.vercel.app/" className="button-4"><MdOutlineWifiTethering /></a>
              <a href="https://github.com/Satyaswarupa/text-speech" className="button-4"><IoCodeSlash /></a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="card" 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="card-content">
          <div className="name">Eventopia</div>
          <div className="description">
            <p>frontend show case project of a cold pyro company</p>
            <div className="buttons">
              <a href="https://eventopiaa.vercel.app/" className="button-4"><MdOutlineWifiTethering /></a>
              <button className="button-4"><IoCodeSlash /></button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="card" 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="card-content">
          <div className="name">Santis Kitchen</div>
          <div className="description">
            <p>frontend show case project of a cat</p>
            <div className="buttons">
              <a href="https://santis-kitchen.vercel.app/" className="button-4"><MdOutlineWifiTethering /></a>
              <a href="https://github.com/Satyaswarupa/santis-kitchen" className="button-4"><IoCodeSlash /></a>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="card" 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="card-content">
          <div className="name">Cart app</div>
          <div className="description">
            <p>This is a brief description of John Doe.</p>
            <div className="buttons">
              <a href="https://miniapplestore.vercel.app/" className="button-4"><MdOutlineWifiTethering /></a>
              <button className="button-4"><IoCodeSlash /></button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project;
