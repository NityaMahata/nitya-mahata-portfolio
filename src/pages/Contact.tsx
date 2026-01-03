const Contact = () => {
  return (
    <section className="min-h-screen bg-slate-900 text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>

        <p className="text-slate-300 mb-10 max-w-2xl">
          I’m open to frontend / React opportunities, freelance projects,
          and collaboration. Feel free to reach out if you’d like to
          discuss a role or project.
        </p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-slate-400 text-sm">Email</p>
            <p className="font-medium">nitya040590@gmail.com</p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">Location</p>
            <p className="font-medium"> Bangalore, Karnataka, India</p>
          </div>

          <div>
            <p className="text-slate-400 text-sm">GitHub</p>
            <a
              href="https://github.com/NityaMahata/"
              className="text-teal-400 hover:underline"
              target="_blank"
            >
             https://github.com/NityaMahata/
            </a>
          </div>

          <div>
            <p className="text-slate-400 text-sm">LinkedIn</p>
            <a
              href="https://linkedin.com/in/nitya-mahata-04104695"
              className="text-teal-400 hover:underline"
              target="_blank"
            >
              https://linkedin.com/in/nitya-mahata-04104695
            </a>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/public/Nitya_Mahata_Resume.pdf"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-black px-6 py-3 rounded-lg font-semibold transition"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
