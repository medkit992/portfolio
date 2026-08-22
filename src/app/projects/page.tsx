const projects = [
  "Portfolio redesign",
  "Dashboard interfaces",
  "Marketing landing pages",
  "Frontend tooling improvements",
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Projects</p>
        <h1 className="mt-4 text-4xl font-bold text-white">Selected work.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project}
            className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/30"
          >
            <div className="mb-5 h-40 rounded-2xl bg-gradient-to-br from-violet-500/30 via-slate-800 to-cyan-500/20" />
            <h2 className="text-xl font-semibold text-white">{project}</h2>
            <p className="mt-3 text-slate-300">
              Thoughtful design paired with clear product goals to create useful, polished interfaces.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
