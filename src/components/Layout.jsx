import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="app">
        <header className="header">
            <h1>Bubbanaut</h1>
            <img src="/logo.png" alt="Bubbanaut Logo" />
        </header>

        <nav className="tabs">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>About</Link>
            <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>

        <main className="main">
            <Outlet />
        </main>
    </div>
  );
}

export default Layout;
