const About = () => {
      const education = [
  {
    year: "2012 – 2015",
    title: "Master Of Computer Application - (MCA)",
    place: "Acharya Institute of Technology, Bangalore - KT, (VTU)",
  },
  {
    year: "2009 – 2011",
    title: "B.Sc IT",
    place: "Balurghat, NBU",
  },
  {
    year: "2008",
    title: "12th",
    place: "Balurghat, WB",
  },
   {
    year: "2006",
    title: "10th",
    place: "Balurghat, WB",
  },
];

const skills = [
  { name: "React.js", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "TypeScript", level: 60 },
  { name: "HTML / CSS", level: 70 },
  { name: "Node.js", level: 70 },
];

  return (
    <>
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-8">
        About <span className="text-primary">Me</span>
      </h2>

      <p className="text-slate-400 mb-10 leading-relaxed">
        Senior Frontend Engineer with 9+ years of experience building
        scalable, WCAG-compliant web applications using React, TypeScript,
        and modern UI frameworks. Strong focus on performance optimization,
        frontend architecture, and AI-powered UI experiences.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          "React & TypeScript",
          "Accessibility (WCAG, NVDA, JAWS)",
          "AI-powered UI & LLM Integration, API Integration",
          "Performance Optimization",
          "Frontend Development",
          "Design Systems & Storybook",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-slate-900 border border-slate-800 p-5 rounded-xl"
          >
            {skill}
          </div>
        ))}
      </div>
    </section><section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-16 text-white">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide">
            Education & Skills
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-teal-400 transition"
              >
                <span className="inline-block bg-teal-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  {edu.year}
                </span>

                <h3 className="text-lg font-semibold">{edu.title}</h3>
                <p className="text-slate-400 mt-1">{edu.place}</p>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-8">My Skills</h3>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>

                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-700"
                      style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
