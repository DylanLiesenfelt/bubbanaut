import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="app">
        <header className="header">Bubbanaut</header>

        <nav className="tabs">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>About</Link>
            <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>Projects</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>

        <main className="main">
            <Outlet />
        </main>

        <footer className="footer">
            <div className="icons">
                <a href="https://github.com/DylanLiesenfelt" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/dylanliesenfelt/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
            
        </footer>
    </div>
  );
}

export default Layout;
