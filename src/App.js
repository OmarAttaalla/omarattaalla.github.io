import Introduction from "./Introduction"
import AnimationSection from "./AnimationSection"
import Header from "./Header.js"
import Contact from "./Contact";
import Technologies from "./Technologies";
import About from "./About";
import "./App.css"

function App() {
  return (
    <div className="IntroGrid">
      <Header />
      <Introduction />
      <AnimationSection />
      <Technologies />
      <About />
      <Contact />
    </div>
  );
}

export default App;
