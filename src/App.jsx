import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import First from "./Components/Hero/first";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import End_page from "./Components/End_page/End_page";


const App = () => {
  return (
    <div>
      <Navbar />
      <First />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <End_page />

    </div>
  );
};

export default App;
