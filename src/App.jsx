import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default layout for about + projects */}
        <Route element={<Layout />}>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>

        {/* Resume gets its own page */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
