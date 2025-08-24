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
      <div className="IntroGrid">
        <Header />
        <Introduction />
        <AnimationSection />
        <Technologies />
        <About />
        <Contact />
      </div>
    </DarkModeProvider>
  );
}

export default App;
