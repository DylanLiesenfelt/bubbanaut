function Projects() {
  const projects = [
    { title: "NextPass Archive", desc: "NFL QB stats scraper + analyzer", link: "#" },
    { title: "Drone Blade CAD", desc: "Custom 3D-printed drone blades", link: "#" },
    { title: "Lab Insta Parse", desc: "iOS photo sharing app", link: "#" },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2">
      {projects.map((proj, idx) => (
        <a
          key={idx}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition"
        >
          <h3 className="font-semibold">{proj.title}</h3>
          <p className="text-sm text-gray-600">{proj.desc}</p>
        </a>
      ))}
    </section>
  );
}

export default Projects;
