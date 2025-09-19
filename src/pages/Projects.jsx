function Projects() {
  const projects = [
    { title: "NextPass Archive", desc: "NFL QB stats scraper + analyzer", link: "#" },
    { title: "Drone Blade CAD", desc: "Custom 3D-printed drone blades", link: "#" },
    { title: "Lab Insta Parse", desc: "iOS photo sharing app", link: "#" },
  ];

  return (
    <section className="projects">
      {projects.map((proj, idx) => (
        <a
          key={idx}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <h3>{proj.title}</h3>
          <p>{proj.desc}</p>
        </a>
      ))}
    </section>
  );
}

export default Projects;
