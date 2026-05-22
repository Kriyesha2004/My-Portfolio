import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import resumePDF from "../../assets/Chathumi Kriyesha_CV_2026.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="about-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Hi, I'm <span>Chathumi Kriyesha</span>. Motivated and detail-oriented final-year Software Engineering student with hands-on enterprise-level experience in full-stack and frontend web development. I have a proven track record of delivering clean, scalable solutions across two internships, utilizing modern frameworks like React, Angular, NestJS, and .NET Core.

        I'm adept at leading development teams, implementing Agile methodologies, and adapting quickly to new technology stacks. I have successfully completed my Higher National Diploma (HND) in Computing and I'm currently pursuing my Top-Up Degree at Cardiff Metropolitan University. I love problem-solving, continuous learning, and exploring creative ways to bring technology and design together.

        Seeking a Full-Stack or Frontend Junior Developer / Intern role to contribute to high-impact software solutions and grow into a versatile developer who can make a difference.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h3>

      <motion.ul
        className="skills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <li>Java</li>
        <li>JavaScript</li>
        <li>HTML & CSS</li>
        <li>TypeScript</li>
        <li>.NET Core</li>
        <li>C#</li>
        <li>Angular</li>
        <li>MySQL</li>
        <li>PHP</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Nest.js</li>
        <li>MongoDB </li>
        <li>Swagger</li>
      </motion.ul>

      <motion.div
        className="resume-download"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <a
          href={resumePDF}
          download
          className="resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume (PDF)
        </a>
      </motion.div>
    </section>
  );
};

export default About;