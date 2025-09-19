function About() {
  return (
    <section className="about">
      <img src="/profile.jpg" alt="Profile picture" className="profile-img" />
      <h2>Dylan Liesenfelt</h2>
      <p>
        Hello! I'm Dylan, a Computer Science and Artificial Intelligence student at Florida Atlantic University, in Palm Beach County, Florida.<br /><br />
        I like building backend systems and web applications, and I'm passionate about machine learning and Data Science.<br /><br />
        I spent 8 years in the US Navy as an Aviation Electricians' Mate, and now I've taken my troubleshooting and problem-solving skills to software development.<br /><br />
        In my free time I enjoy building things, walking and hiking with my dogs and girlfriend, playing Magic: The Gathering. <br /><br />
        Thanks for coming to my site dont forget to check out my projects!
      </p>
      {/* Contact section */}
      <div className="about-contact">
        <div className="icons">
          <a href="https://github.com/DylanLiesenfelt" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/dylanliesenfelt" target="_blank" rel="noreferrer">
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
