import { type Project } from "../data/Projects";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-slate-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 bg-slate-800 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        <a className="hover:text-primary" href={project.github}>
          GitHub
        </a>
        {project.live && (
          <a className="hover:text-primary" href={project.live}>
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
