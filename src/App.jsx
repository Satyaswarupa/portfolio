import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home"
import Projects from "./components/Project"
import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"

import "./styles/app.scss"
import Footer from "./components/Footer";
import Skills from "./components/Skills";


const App = () => {
  return (
   <div className="main">
     <Router>
      <Nav />
        <Home />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
      <Skills />
      <Footer />
    </Router>
   </div>
  );
};

export default App;
