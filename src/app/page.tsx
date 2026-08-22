import Image from "next/image";
import Link from "next/link";

const skills = ["React", "Next.js", "TypeScript", "UI Design", "Node.js", "Problem Solving"];

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
              Software developer
            </p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight text-white md:text-6xl">
              I build thoughtful digital experiences.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300">
              I’m a developer focused on designing and shipping intuitive web applications that balance clean design with reliable performance.
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
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Focus</p>
                <p className="mt-2 text-lg font-semibold text-white">UX</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Tools</p>
                <p className="mt-2 text-lg font-semibold text-white">React</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Style</p>
                <p className="mt-2 text-lg font-semibold text-white">Modern</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-lg shadow-slate-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Who I am</p>
          <h2 className="mt-4 text-3xl font-bold text-white">Building products people enjoy using.</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">
            I’m a software developer with a passion for building web applications. I specialize in front-end development using React and Next.js, and I have experience with back-end technologies such as Node.js and Express. I enjoy learning new tools and refining my craft to create better user experiences.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-cyan-500/10 p-8 shadow-lg shadow-slate-950/30">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">What I do</p>
          <ul className="mt-5 space-y-4 text-slate-200">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block size-2.5 rounded-full bg-violet-400" />
              Design and build responsive user interfaces for modern products.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block size-2.5 rounded-full bg-violet-400" />
              Turn complex ideas into clean, accessible user flows and interactions.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block size-2.5 rounded-full bg-violet-400" />
              Improve product performance, maintainability, and developer experience.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

