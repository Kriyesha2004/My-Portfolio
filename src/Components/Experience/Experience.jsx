import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
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
                <motion.div
                    className="experience-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="experience-icon">
                        <FaBriefcase />
                    </div>
                    <div className="experience-content">
                        <h3>Fullstack Developer Intern</h3>
                        <h4>QT_labX</h4>
                        <span className="duration">December 2025 – January 2026</span>
                        <p>
                            Gained hands-on experience as a Full-Stack Developer during a three-month internship, contributing to the development and maintenance of scalable web applications. Worked extensively with React on the frontend and NestJS with MongoDB on the backend to build efficient, well-structured solutions. Applied basic AI prompting techniques to support development workflows and enhance productivity. Collaborated closely with cross-functional team members, gaining strong teamwork, communication, and problem-solving skills in an agile development environment.
                        </p>
                        <div className="experience-actions">
                            {/* Placeholder for future letter/certificate */}

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
