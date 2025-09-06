import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import First from "./Components/Hero/first";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import End_page from "./Components/End_page/End_page";


const App = () => {
  return (
    <div>
      <Navbar />
      <First />
      <About />
      <Projects />
      <Contact />
      <End_page/>
      
    </div>
  );
};

export default App;
