const techStack = [
  ["HTML", "CSS", "Tailwindcss"],
  ["JavaScript (ES6+)", "TypeScript"],
  ["React JS", "Next JS (Basic)", "Node JS", "Express JS"],
  ["Material UI", "AntD", "StoryBook"],
  ["Jest", "React Testing Library"],
  ["Redux", "MobX", "Thunk / Saga"],
  ["SQL", "MySQL", "MongoDB"],
  ["Webpack", "Git","GitLab"],
];

const TechStack = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-20 text-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider">
          Tech Stack
        </h2>
        <div className="w-16 h-1 bg-teal-400 mx-auto mt-4 rounded-full" />
        <p className="mt-6 text-slate-300 tracking-wide">
          Here are some of the technologies I work with:
        </p>
      </div>

      {/* Tech Pills */}
      <div className="max-w-4xl mx-auto flex flex-col gap-6 items-center">
        {techStack.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-4"
          >
            {row.map((tech, index) => (
              <span
                key={index}
                className="
                  px-5 py-2 rounded-full text-sm font-medium
                  bg-gradient-to-r from-blue-600 to-emerald-500
                  shadow-md shadow-black/40
                  hover:scale-105 hover:brightness-110
                  transition-all duration-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
