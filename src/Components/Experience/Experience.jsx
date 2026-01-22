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
                        <h3>Front End Developer Intern</h3>
                        <h4>QT_labX</h4>
                        <span className="duration">October 2025 – January 2026</span>
                        <p>
                            QT LabX (Internship) – Front end  Developer Intern Octomber 2025 – January 2026 -
                            Developed and maintained web application features using React.js ,Vite and TypeScript
                            Built reusable frontend components and integrated Collaborated with senior developers in
                            an Agile development environment - Gained experience in version control, clean coding
                            practices, and deployment workflows
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
