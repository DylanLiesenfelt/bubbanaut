function Resume() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <iframe
        src="/resume.pdf"
        title="Resume"
        className="w-full h-screen"
      />
    </div>
  );
}

export default Resume;
