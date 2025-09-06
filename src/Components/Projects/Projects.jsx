import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projectList = [
  {
    title: "CarePoint",
    duration: "2024 – Present",
    role: "Team Lead / Full Stack",
    desc: `A digital mental health platform designed for Sri Lankan youth. 
    Features include journaling (PowerPoint-style editor with stickers/fonts), 
    anonymous chat, mood tracking with graphs, music therapy, and consultant support.`,
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    code: "https://github.com/Kriyesha2004/HND_Final_project",
    live: "#",
  },
  {
    title: "FitZone",
    duration: "2024",
    role: "Frontend Developer",
    desc: `A digital fitness platform offering personalized workout plans, exercise tracking, 
    and nutrition guidance to help users achieve fitness goals effectively.`,
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    code: "https://github.com/Kriyesha2004/FitZone",
    live: "#",
  },
  {
    title: "Hotel & Booking Systems",
    duration: "2024",
    role: "Full Stack",
    desc: `Developed case studies for booking systems such as hotel/room booking, flight booking, 
    doctor appointments, online checkout, and student registration.`,
    tech: ["Java", "PHP", "MySQL"],
    code: "https://github.com/Kriyesha2004/LuxeVistaResort",
    live: "#",
  },
  {
    title: "The Gadget Hub",
    duration: "2024",
    role: "Full Stack / SOC Developer",
    desc: `A Service-Oriented Computing project for e-commerce. 
    Distributors manage quotations, while admins/customers handle orders, carts, and inventory. 
    Built using .NET, C#, and SQL Server.`,
    tech: [".NET", "C#", "SQL Server", "Windows Forms"],
    code: "https://github.com/kriyesha/GadgetHub",
    live: "#",
  },
  {
    title: "Pet Shop",
    duration: "2023",
    role: "Developer",
    desc: `A C++ based system for managing a small pet store with features to buy and track pet items. 
    Demonstrates object-oriented concepts such as inheritance, polymorphism, and abstraction.`,
    tech: ["C++", "OOP"],
    code: "https://github.com/Kriyesha2004/Pet-shop",
    live: "#",
  },
  {
    title: "Automobile Data Analysis",
    duration: "2023",
    role: "Data Analyst",
    desc: `A business analysis project for the Ministry of Transport, Sri Lanka. 
    Explored automobile datasets to recommend suitable vehicle types for the country’s road network.`,
    tech: ["R", "R-Studio", "R-Commander"],
    code: "https://github.com/Kriyesha2004/Automobile-Data-Analysis",
    live: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.7, type: "spring" },
  }),
};

const Projects = () => (
  <section className="projects" id="projects">
    <h2>My Projects</h2>
    <div className="project-cards">
      {projectList.map((proj, i) => (
        <motion.div
          className="card modern"
          key={proj.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="card-header">
            <h3 className="project-title">{proj.title}</h3>
            <span className="react-icon" title="React Project">♾️🌐</span>
          </div>
          <div className="project-meta">
            <span>{proj.duration}</span> &nbsp;|&nbsp; <span>{proj.role}</span>
          </div>
          <p className="project-desc">{proj.desc}</p>
          <div className="tech-stack">
            <span className="tech-label">Tech Stack:</span>
            <div className="tech-list">
              {proj.tech.map((t) => (
                <span className="tech-pill" key={t}>{t}</span>
              ))}
            </div>
          </div>
          <div className="project-links">
            <a href={proj.code} target="_blank" rel="noopener noreferrer" className="icon-link">
              <FaGithub /> Code
            </a>
            {proj.live && proj.live !== "#" && (
              <a href={proj.live} target="_blank" rel="noopener noreferrer" className="icon-link">
                <FiExternalLink /> Live
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
