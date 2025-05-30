import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack";
import Education from "./components/Education";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pl-4 pr-4 pb-4">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div>
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
      </div>
    </div>
  );
}

export default App;
