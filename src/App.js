import Introduction from "./Introduction"
import AnimationSection from "./AnimationSection"
import Header from "./Header.js"
import Contact from "./Contact";
import "./App.css"

function App() {
  return (
    <div className="IntroGrid">
      <Header />
      <Introduction />
      <AnimationSection />
      <Contact />
    </div>
  );
}

export default App;
