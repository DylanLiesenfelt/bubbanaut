import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <Router>
      <div className="flex flex-col min-h-screen text-gray-900 bg-gray-50">
        {/* Header */}
        <header className="p-4 shadow-md bg-white sticky top-0 z-10">
          <h1 className="text-xl font-bold">Bubbanaut</h1>
        </header>

        {/* Tabs */}
        <nav className="flex justify-around bg-gray-100 text-sm">
          <button
            onClick={() => setActiveTab("about")}
            className={`flex-1 py-2 ${activeTab === "about" ? "font-bold border-b-2 border-blue-500" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("projects")}
            className={`flex-1 py-2 ${activeTab === "projects" ? "font-bold border-b-2 border-blue-500" : ""}`}
          >
            Projects
          </button>
          <Link to="/resume" className="flex-1 py-2 text-center">
            Resume
          </Link>
        </nav>

        {/* Main */}
        <main className="flex-grow p-4">
          {activeTab === "about" && <About />}
          {activeTab === "projects" && <Projects />}
        </main>

        {/* Footer */}
        <footer className="p-4 bg-white border-t flex flex-col items-center space-y-2">
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
          </div>
          <p className="text-sm">your.email@example.com</p>
        </footer>

        {/* Resume Route */}
        <Routes>
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
