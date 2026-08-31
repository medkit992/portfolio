import Image from "next/image";
import Link from "next/link";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "APIs",
  "Browser Extensions",
];

const chromeStoreUrl =
  "https://chromewebstore.google.com/detail/blackbox-api-visualizer/lcpcamkiogebdpenagfgpolmpfhcfeli";
const blackboxGitHubUrl =
  "https://github.com/medkit992/Blackbox-API-Visualizer";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <section className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-sm font-medium text-violet-200">
            Available for freelance and product work
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Full-Stack Software Developer
            </p>

            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-6xl">
              I build polished applications from the interface to the systems behind them.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-300">
              I build modern web applications, developer tools, integrations,
              and automation with a focus on clean interfaces, reliable logic,
              and software that is straightforward to use and maintain.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:bg-violet-400"
            >
              View projects
            </Link>

            <Link
              href="/about"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-300/50 hover:text-white"
            >
              About me
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-[2rem] bg-violet-500/20 blur-3xl" />

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/40">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
              <Image
                src="/profile-photo.jpg"
                alt="Profile portrait"
                width={500}
                height={500}
                className="h-[520px] w-full object-cover"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Focus
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Full Stack
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Stack
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  TypeScript
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Approach
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Product-first
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-lg shadow-slate-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            How I build
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Product thinking backed by hands-on engineering.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300">
            I enjoy taking an idea from rough requirements to a working product:
            shaping the interface, connecting APIs and application logic, and
            refining the details until the experience feels intentional.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-300">
            My work spans full-stack web applications, developer tooling,
            integrations, and automation, with an emphasis on maintainable code
            and practical solutions.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 p-8 shadow-lg shadow-slate-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            What I work on
          </p>

          <ul className="mt-5 space-y-4 text-slate-200">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block size-2.5 shrink-0 rounded-full bg-violet-400" />
              Responsive interfaces and full-stack web applications.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block size-2.5 shrink-0 rounded-full bg-violet-400" />
              APIs, integrations, authentication, and application data flows.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block size-2.5 shrink-0 rounded-full bg-violet-400" />
              Developer tools and browser-based debugging experiences.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block size-2.5 shrink-0 rounded-full bg-violet-400" />
              Automation and bot-driven workflows for online communities.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Featured work
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white">
              Shipped software, not placeholder projects.
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm font-semibold text-violet-300 transition hover:text-violet-200 sm:block"
          >
            View all projects →
          </Link>
        </div>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 shadow-2xl shadow-slate-950/30">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-80 overflow-hidden border-b border-white/10 bg-slate-950 p-8 lg:border-b-0 lg:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.28),transparent_48%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_45%)]" />
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
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    Chrome DevTools Extension
                  </p>
                  <p className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
                    Blackbox
                  </p>
                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                    A visual API debugger built to make network behavior easier
                    to inspect, understand, and explain.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                Blackbox API Visualizer
              </p>
              <h3 className="mt-3 text-3xl font-bold text-white">
                Turning raw network traffic into useful debugging context.
              </h3>
              <p className="mt-5 leading-7 text-slate-300">
                Blackbox captures network activity directly from Chrome DevTools
                and organizes it into request inspection, diagnostics, session
                insights, response exploration, and an interactive page-to-domain-to-endpoint graph.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-semibold text-white">Network diagnostics</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Inspect failures, timing, payloads, and request context.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-semibold text-white">Session insights</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Surface repeated errors, polling, duplicates, and noisy endpoints.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-sm font-semibold text-white">Visual relationships</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Explore how pages, domains, and endpoints connect.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={chromeStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
                >
                  View live extension ↗
                </a>
                <a
                  href={blackboxGitHubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
                >
                  GitHub & contributions ↗
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
