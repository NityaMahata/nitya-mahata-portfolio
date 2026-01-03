const experiences = [
  {
    company: "GlobalLogic India Pvt. Ltd. (Hitachi Group)",
    location: "Bengaluru, India",
    role: "Associate Consultant",
    duration: "May 2022 – Oct 2025",
    description: [
      "Developed and maintained scalable React + TypeScript applications for Verizon ecommerce and Planview Strategic Portfolio Management platforms.",
      "Built modular, reusable UI components ensuring long-term maintainability.",
      "Led accessibility (WCAG 2.1) testing using NVDA & JAWS with full keyboard navigation support.",
      "Performed Root Cause Analysis (RCA) to resolve complex UI and performance issues.",
      "Improved frontend performance via memoization, code-splitting, and optimized rendering.",
      "Contributed to CI/CD pipelines, GitHub workflows, and technical documentation.",
    ],
  },
  {
    company: "eTeam Infoservices Pvt. Ltd.",
    location: "Bengaluru, India",
    role: "Senior Software Engineer",
    duration: "Jun 2021 – Dec 2021",
    description: [
      "Modernized a legacy Vue.js + Node.js system into a React + Node.js architecture.",
      "Implemented API-driven dashboards improving performance and maintainability.",
      "Led unit and integration testing using Jest and React Testing Library.",
      "Introduced AI-ready frontend patterns to support future intelligent automation.",
      "Delivered L3 production support and authored technical documentation.",
    ],
  },
  {
    company: "Adecco India Pvt. Ltd. (Client: Juniper Networks)",
    location: "Bengaluru, India",
    role: "Software Engineer",
    duration: "Oct 2020 – Apr 2021",
    description: [
      "Developed a report generation system for analytics workflows.",
      "Designed MySQL schemas for equipment lifecycle management and reporting.",
      "Improved application performance and security through optimized validation and routing.",
      "Built extensible UI components adaptable for future AI-based insights.",
    ],
  },
  {
    company: "Go Digit General Insurance / Compassites Software Solutions",
    location: "Bengaluru, India",
    role: "Software Engineer",
    duration: "Feb 2019 – Apr 2020",
    description: [
      "Developed backend modules for CRM platforms improving customer engagement.",
      "Integrated frontend components with APIs for real-time data accuracy.",
      "Optimized PostgreSQL queries and improved data models.",
      "Collaborated on UI enhancements for intelligent ticket categorization.",
    ],
  },
  {
    company: "Enlighten Software Services Pvt. Ltd.",
    location: "Bengaluru, India",
    role: "Software Engineer",
    duration: "Feb 2017 – May 2018",
    description: [
      "Developed scalable backend services for high-traffic platforms.",
      "Managed MySQL databases and optimized transactional queries.",
      "Supported API enhancements consumed by frontend applications.",
    ],
  },
  {
    company: "Busybizz (Serve U Media Pvt. Ltd.)",
    location: "Bengaluru, India",
    role: "Web Developer",
    duration: "May 2016 – Feb 2017",
    description: [
      "Built backend modules for a business listing platform.",
      "Designed optimized MySQL schemas for listings and user interactions.",
    ],
  },
  {
    company: "Askdeveloper.net",
    location: "Bengaluru, India",
    role: "Web Developer",
    duration: "Feb 2015 – May 2016",
    description: [
      "Delivered PHP-based backend solutions for multiple freelance projects.",
      "Designed secure and optimized database schemas.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-14">
          <h1 className="text-4xl font-bold mb-2">Professional Experience</h1>
          <p className="text-slate-400 max-w-2xl">
            My industry experience building scalable, accessible, and
            performance-focused frontend applications.
          </p>
        </header>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 hover:border-teal-400 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <span className="text-sm text-slate-400">{exp.duration}</span>
              </div>

              <p className="text-teal-400 font-medium mb-2">{exp.company}</p>

              <p className="text-slate-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
