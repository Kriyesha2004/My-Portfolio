import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Kriyesha</h2>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="Experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
    </nav>
  );
};

export default Navbar;
