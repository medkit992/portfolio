import Image from "next/image";
import Link from "next/link";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "APIs",
  "UI Design",
];

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
              Software Developer
            </p>

            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-6xl">
              I build web applications from the interface to the systems behind them.
            </h1>

            <p className="max-w-xl text-lg leading-8 text-slate-300">
              I’m a software developer focused on building thoughtful,
              practical web applications with clean interfaces, reliable
              application logic, and a strong attention to the details that
              make products feel good to use.
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
                  Applications
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
                  Practical
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-lg shadow-slate-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            Who I am
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white">
            Building software that solves real problems.
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300">
            I enjoy taking an idea and turning it into a working application.
            My interests sit across the stack, from designing interfaces and
            writing application logic to building APIs and working with the
            data those applications depend on.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-300">
            I’m especially interested in understanding how the different
            pieces of software fit together and continually expanding my
            knowledge of the systems behind the applications I build.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 p-8 shadow-lg shadow-slate-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            What I do
          </p>

          <ul className="mt-5 space-y-4 text-slate-200">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block size-2.5 shrink-0 rounded-full bg-violet-400" />
              Build responsive, accessible interfaces for modern web applications.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block size-2.5 shrink-0 rounded-full bg-violet-400" />
              Develop application logic and APIs that connect interfaces to data.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block size-2.5 shrink-0 rounded-full bg-violet-400" />
              Turn complex ideas into maintainable, practical software.
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block size-2.5 shrink-0 rounded-full bg-violet-400" />
              Continuously explore the systems, tools, and technologies behind modern applications.
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
              Projects that show how I build.
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden text-sm font-semibold text-violet-300 transition hover:text-violet-200 sm:block"
          >
            View all projects →
          </Link>
        </div>

        <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] p-8 text-center">
          <p className="text-lg font-semibold text-white">
            Projects coming soon.
          </p>

          <p className="mx-auto mt-2 max-w-xl text-slate-400">
            I’m currently building a collection of projects that demonstrate
            my approach to frontend development, APIs, application architecture,
            and full-stack development.
          </p>

          <Link
            href="/projects"
            className="mt-5 inline-block text-sm font-semibold text-violet-300 hover:text-violet-200"
          >
            Explore the projects page →
          </Link>
        </div>
      </section>
    </div>
  );
}