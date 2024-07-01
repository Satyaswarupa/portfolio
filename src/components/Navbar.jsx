import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/navcontaint.scss"

const Navbar = () => {
  return (
    <div className="navcontaint">
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      <NavLink to="/projects" exact activeClassName="active">
        Project
      </NavLink>
      <NavLink to="/education" activeClassName="active">
        Education
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
