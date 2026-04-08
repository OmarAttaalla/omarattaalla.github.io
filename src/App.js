import React from "react";
import { motion } from "framer-motion";
import Introduction from "./sections/Introduction.js"
import AnimationSection from "./sections/AnimationSection.js"
import Header from "./sections/Header.js"
import Contact from "./sections/Contact";
import Technologies from "./sections/Technologies.js";
import About from "./sections/About.js";
import "./App.css"
import { DarkModeProvider } from "./context/DarkModeContext.js";

function App() {
  return (
    <DarkModeProvider>
      <div className="App">
        <Header />
        <motion.main 
          className="IntroGrid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Introduction />
          <AnimationSection />
          <Technologies />
          <About />
          <Contact />
        </motion.main>
      </div>
    </DarkModeProvider>
  );
}

export default App;
