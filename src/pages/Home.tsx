const Home = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="text-primary mb-3 text-sm tracking-wide">
            Senior Frontend Engineer • React • TypeScript • AI UI
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nitya <span className="text-primary">Mahata</span>
          </h1>

          <p className="text-slate-400 leading-relaxed mb-6">
            Senior Frontend Engineer with 9+ years of experience building
            scalable, accessible, and high-performance web applications.
            Recently focused on AI-powered UI experiences and LLM integrations.
          </p>

          <div className="flex gap-4">
             <a
              href="/Nitya_Mahata_Resume.pdf"
              download="Nitya_Mahata_Resume.pdf"
               target="_blank"
            >
              Download Resume
            </a>

            <a
              href="/projects"
              className="px-6 py-3 border border-slate-700 rounded-lg hover:border-primary"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full border-4 border-primary flex items-center justify-center text-5xl font-bold text-primary">
            NM
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
