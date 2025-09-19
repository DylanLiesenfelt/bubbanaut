function About() {
  return (
    <section className="about">
      <img src="/profile.jpg" alt="Profile picture" className="profile-img" />
      <h2>Dylan Liesenfelt</h2>
      <p>
        I’m a software engineer passionate about building data-driven solutions,
        web apps, and ML projects. I enjoy working across the stack and
        experimenting with new technologies.
      </p>

      {/* Contact section */}
      <div className="about-contact">
        <div className="icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>
          <p><a href="mailto:djliesenfelt.work@gmail.com">djliesenfelt.work@gmail.com</a></p>
          <p><a href="mailto:dliesenfelt2022@fau.edu">dliesenfelt2022@fau.edu</a></p>
        </p>
      </div>
    </section>
  );
}

export default About;
