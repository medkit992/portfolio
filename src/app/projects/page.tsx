const projects = [
  {
    title: "Blackbox API Visualizer",
    category: "Developer Tool · Chrome DevTools Extension",
    description:
      "An open-source DevTools extension that captures and visualizes browser network traffic, surfaces request diagnostics and session patterns, and helps developers understand how pages communicate with APIs and backend services.",
    technologies: [
      "TypeScript",
      "Chrome DevTools API",
      "Cytoscape.js",
      "Vitest",
      "Network APIs",
    ],
    highlights: [
      "Published on the Chrome Web Store",
      "Interactive page → domain → endpoint graph",
      "Request diagnostics, response exploration, and session insights",
      "Local-first handling of captured network data",
      "Open-source with contribution documentation and automated testing",
    ],
    liveUrl:
      "https://chromewebstore.google.com/detail/blackbox-api-visualizer/lcpcamkiogebdpenagfgpolmpfhcfeli",
    githubUrl: "https://github.com/medkit992/Blackbox-API-Visualizer",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Projects
        </p>

        <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Selected work.
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          A growing collection of shipped software and technical projects that
          show how I approach product development, debugging, APIs, interfaces,
          and application architecture.
        </p>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-violet-400/30"
          >
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative min-h-80 overflow-hidden border-b border-white/10 bg-slate-950 p-8 lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.3),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.2),transparent_46%)]" />
                <div className="absolute right-7 top-7 text-7xl font-black text-white/[0.04]">
                  0{index + 1}
                </div>

                <div className="relative flex h-full min-h-64 flex-col justify-between">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-emerald-300">
                      Published
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">
                      Open Source
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      Developer tooling
                    </p>
                    <h2 className="mt-3 text-4xl font-black tracking-tight text-white">
                      Blackbox
                    </h2>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
                      Visual debugging for the network layer inside Chrome DevTools.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-7 md:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                  {project.category}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-white">
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

                <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Engineering highlights
                  </p>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
                  >
                    Live on Chrome Web Store ↗
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
                  >
                    Source & contributions ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-7 text-center">
        <p className="text-sm text-slate-400">
          Additional full-stack and developer-tool projects will be added as they are ready to showcase.
        </p>
      </div>
    </div>
  );
}
