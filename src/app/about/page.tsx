const contactDetails = [
  {
    label: "Phone",
    value: "864-510-8711",
    href: "tel:8645108711",
  },
  {
    label: "Email",
    value: "andrewgomes703@gmail.com",
    href: "mailto:andrewgomes703@gmail.com",
  },
  {
    label: "Preferred contact",
    value: "Text message",
    href: null,
  },
];

const technologies = {
  Frontend: ["React", "Next.js", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "APIs", "SQL", "Supabase"],
  "Tools & Systems": ["Git", "GitHub", "Vercel"],
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-slate-950/30 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
          About
        </p>

        <h1 className="mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
          A software developer who likes understanding how things work.
        </h1>

        <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-300">
          <p>
            I’m a software developer focused on building web applications.
            I enjoy working across the application stack, from creating
            interfaces and user experiences to writing the logic and APIs that
            make those applications work.
          </p>

          <p>
            I care about building software that is useful, maintainable, and
            enjoyable to use. I also enjoy learning what happens underneath
            the application layer, which has led me to explore areas such as
            Linux, networking, and security.
          </p>

          <p>
            Rather than trying to specialize in every part of software
            engineering, I focus on becoming exceptionally capable at the
            areas that interest me while building enough understanding of the
            surrounding systems to make better software.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:bg-violet-400"
          >
            View resume
          </a>

          <a
            href="mailto:andrewgomes703@gmail.com"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-300/50 hover:text-white"
          >
            Email me
          </a>
        </div>

        <div className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Technologies
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {Object.entries(technologies).map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="text-lg font-semibold text-white">
                  {category}
                </h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
            Get in touch
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white">
            Let’s build something useful.
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.2fr_0.9fr]">
            {contactDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  {item.label}
                </p>

                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-3 block break-words text-lg font-semibold text-white hover:text-violet-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-3 text-lg font-semibold text-white">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}