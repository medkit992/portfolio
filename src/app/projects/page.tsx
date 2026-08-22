const projects = [
  {
    title: "Project One",
    category: "Full-Stack Application",
    description:
      "A full-stack application demonstrating frontend development, application logic, APIs, authentication, and data management.",
    technologies: ["Next.js", "TypeScript", "API", "Database"],
  },
  {
    title: "Project Two",
    category: "Developer Tool",
    description:
      "A technically focused application built to explore APIs, HTTP, data flow, and the systems that connect modern web applications.",
    technologies: ["React", "TypeScript", "APIs"],
  },
  {
    title: "Project Three",
    category: "Frontend Application",
    description:
      "A polished frontend experience focused on responsive design, interaction, accessibility, and thoughtful user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Projects
        </p>

        <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Selected work.
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          A collection of applications and experiments that demonstrate how I
          approach software development, from polished interfaces to APIs and
          full-stack application architecture.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-lg shadow-slate-950/30 transition hover:-translate-y-1 hover:border-violet-400/30"
          >
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-64 overflow-hidden bg-gradient-to-br from-violet-500/30 via-slate-800 to-cyan-500/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.25),transparent_55%)]" />

                <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300 backdrop-blur">
                  0{index + 1}
                </div>
              </div>

              <div className="p-7 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                  {project.category}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <span className="text-sm font-semibold text-slate-500">
                    Demo coming soon
                  </span>

                  <span className="text-sm font-semibold text-slate-500">
                    GitHub coming soon
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}