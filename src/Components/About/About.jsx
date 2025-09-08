import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import resumePDF from "../../assets/Chathumi_Kriyesha_CV.pdf";

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
        Hi, I’m <span>Chathumi Kriyesha</span>, a passionate and dedicated developer with a strong foundation in HTML, CSS, Java, JavaScript, and PHP. I enjoy turning ideas into functional and visually appealing digital experiences.

        I have successfully completed my Higher National Diploma (HND) in Computing and I’m currently pursuing my Top-Up Degree at Cardiff Metropolitan University. Alongside my academic journey, I’m expanding my skills by learning React to build modern, dynamic web applications.

        I love problem-solving, continuous learning, and exploring creative ways to bring technology and design together. My goal is to grow into a versatile full-stack developer and contribute to impactful projects that make a difference.
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
        <li>MySQL</li>
        <li>PHP</li>
        <li>React.js</li>
        <li>Node.js</li>
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