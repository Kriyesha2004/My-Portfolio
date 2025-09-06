import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Email: <a href="mailto:kriyesha@example.com">chathumik2004@gmail.com</a>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/chathumi-kriyesha-2187b8307/" target="_blank" rel="noreferrer">
          linkedin.com/in/kriyesha
        </a>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        viewport={{ once: true }}
      >
        GitHub:{" "}
        <a href="https://github.com/Kriyesha2004" target="_blank" rel="noreferrer">
          https://github.com/Kriyesha2004
        </a>
      </motion.p>
       <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Contact Number:{" "}
        <a href="" target="_blank" rel="noreferrer">
          0729003343
        </a>
      </motion.p>
    </section>
  );
};

export default Contact;
