import React from "react";
import "./End_page.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} <span className="footer-brand">Kriyesha</span> | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
