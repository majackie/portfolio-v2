import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects/Projects";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-screen-lg mx-auto pl-4 pr-4 pb-4">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <div className="flex flex-col lg:flex-row relative">
          <div className="lg:w-2/5 lg:pr-4">
            <div className="lg:sticky lg:top-20">
              <About />
              <div className="hidden lg:block mt-4">
                <Dropdown />
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 lg:pl-4">
            <Experience />
            <Projects />
            <TechStack />
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
