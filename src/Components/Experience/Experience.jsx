import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Full-Stack Developer Intern",
      company: "Courtaulds Clothing Lanka (Pvt) Ltd",
      duration: "March 2026 – September 2026",
      description:
        "Contributing to enterprise web applications by developing responsive frontend interfaces using Angular and TypeScript. Designing and implementing backend RESTful APIs using .NET Core and C#. Managing relational databases with SQL Server Management Studio (SSMS), documenting APIs with Swagger, and collaborating with the IT department to deliver production-ready solutions.",
    },
    {
      id: 2,
      title: "Front End Developer Intern",
      company: "QT LabX",
      duration: "October 2025 – January 2026",
      description:
        "Developed and maintained web application features using React.js, Vite, and TypeScript. Built reusable frontend components and collaborated with senior developers in an Agile development environment. Gained hands-on experience in version control, clean coding practices, and deployment workflows.",
    },
  ];

  return (
    <section className="experience" id="experience">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="experience-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="experience-icon">
              <FaBriefcase />
            </div>
            <div className="experience-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <span className="duration">{exp.duration}</span>
              <p>{exp.description}</p>
              <div className="experience-actions">
                {/* Placeholder for future letter/certificate */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
