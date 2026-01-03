// src/data/project.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered UI Assistant",
    description:
      "LLM-based assistant integrated into a React UI to provide contextual help, suggestions, and intelligent interactions.",
    tech: ["React", "TypeScript", "OpenAI API"],
    github: "https://github.com/yourusername/ai-ui",
  },

  // 🔽 Current / Latest Projects (shown last on UI)
  {
    id: 2,
    title: "Finance Dashboard",
    description:
      "Interactive finance dashboard with charts, analytics, and real-time data visualization for tracking KPIs and business metrics.",
    tech: ["React", "TypeScript", "Chart.js", "REST APIs"],
    github: "https://github.com/yourusername/finance-dashboard",
  },
  {
    id: 3,
    title: "E-commerce App",
    description:
      "Full-featured e-commerce application with product listing, cart management, authentication, and checkout flow.",
    tech: ["React", "Redux", "Node.js", "REST APIs"],
    github: "https://github.com/yourusername/ecommerce-app",
  },
  {
    id: 4,
    title: "AI Resume Analyzer",
    description:
      "AI-driven resume analysis tool that evaluates resumes, highlights skill gaps, and provides improvement suggestions.",
    tech: ["React", "TypeScript", "OpenAI API", "Tailwind CSS"],
    github: "https://github.com/yourusername/ai-resume-analyzer",
  },
  {
    id: 5,
    title: "Kanban App",
    description:
      "Trello-like Kanban board for task management with drag-and-drop support and real-time state updates.",
    tech: ["React", "TypeScript", "Drag & Drop", "Local Storage"],
    github: "https://github.com/yourusername/kanban-app",
  },
];
