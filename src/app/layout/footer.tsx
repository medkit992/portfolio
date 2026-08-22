export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row">
        <p>© 2026 Andrew Gomes. All rights reserved.</p>
        <p>
          Built with <a href="https://nextjs.org/" className="font-medium text-violet-300 hover:text-violet-200">Next.js</a>
        </p>
      </div>
    </footer>
  );
}
