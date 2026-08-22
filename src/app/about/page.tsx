const contactDetails = [
  { label: "Phone", value: "864-510-8711", href: "tel:8645108711" },
  { label: "Email", value: "andrewgomes703@gmail.com", href: "mailto:andrewgomes703@gmail.com" },
  { label: "Preferred contact", value: "Text message", href: null },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 shadow-xl shadow-slate-950/30 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">About</p>
        <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          A curious developer with a product mindset.
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I enjoy creating polished, intuitive experiences that feel effortless for users and easy for teams to maintain.
          My work blends design sensibility, technical execution, and a strong focus on practical outcomes.
        </p>

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

        <div className="mt-12 grid gap-6 md:grid-cols-[0.9fr_1.2fr_0.9fr]">
          {contactDetails.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="mt-3 block text-lg font-semibold text-white hover:text-violet-200">
                  {item.value}
                </a>
              ) : (
                <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
