export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="opacity-80">© {new Date().getFullYear()} Akhila P — Crafted with React, Tailwind, and R3F.</div>
      </div>
    </footer>
  );
}
