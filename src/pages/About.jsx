function About() {
  return (
    <section className="flex flex-col items-center text-center space-y-4">
      <img
        src="/your-photo.jpg"
        alt="Profile"
        className="w-28 h-28 rounded-full object-cover border"
      />
      <h2 className="text-lg font-semibold">Dylan Liesenfelt</h2>
      <p className="max-w-md text-gray-600">
        I’m a software engineer passionate about building data-driven solutions, 
        web apps, and ML projects. I enjoy working across the stack and 
        experimenting with new technologies.
      </p>
    </section>
  );
}

export default About;
