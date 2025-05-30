import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-4">
      <div className="sticky top-0 z-50 pb-4">
        <Navbar />
      </div>
      <div>
        <About />
      </div>
    </div>
  );
}

export default App;
