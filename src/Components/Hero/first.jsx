import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./First.css"; // Import the CSS

const words = ["Developer", "Leader", "Creator"];

export default function First() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      <div className="pattern-overlay"></div>
      <div className="gradient-overlay"></div>

      <div className="hero-content">
        {/* Removed the four .corner divs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="content-inner"
        >
          <div className="hero-name">
            <h1 className="intro">Hi, I'm</h1>
            <h1 className="name">Chathumi</h1>
          </div>

          <div className="word-cycle">
            <AnimatePresence mode="wait">
              <motion.h2
                key={index}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.6 }}
                className="word"
              >
                {words[index]}
              </motion.h2>
            </AnimatePresence>
            <div className="underline"></div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="scroll-indicator"
          >
            <span></span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="particle particle1"></div>
      <div className="particle particle2"></div>
      <div className="particle particle3"></div>
      <div className="particle particle4"></div>
    </section>
  );
}