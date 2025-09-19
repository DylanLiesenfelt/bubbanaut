function Projects() {
  const projects = [
  {
    title: "OwlCast",
    desc: "A discord bot for localized weather notifications",
    repo: "https://github.com/DylanLiesenfelt/OwlCast",
  },
  {
    title: "BuffBuds",
    desc: "Web app to track and log workouts with a social aspect",
    repo: "https://github.com/DylanLiesenfelt/BuffBuds",
    demo: "https://buffbuds.netlify.app/"
  },
  {
    title: "Stocks.ML",
    desc: "Using machine learning to make educated price predictions and live trading bot",
    repo: "https://github.com/DylanLiesenfelt/Stocks.ML"
  },
];

  return (
    <section className="projects">
      {projects.map((proj, idx) => (
        <div key={idx} className="project-card">
          {/* Whole card clickable */}
          <a
            href={proj.demo || proj.repo}
            target="_blank"
            rel="noreferrer"
            className="card-body"
          >
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </a>

          {/* GitHub link */}
          <div className="card-footer">
            <a href={proj.repo} target="_blank" rel="noreferrer" className="github-link">
              <i className="fab fa-github"></i> Code
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
