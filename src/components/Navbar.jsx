import { useEffect, useState } from "react";
import { FiDownload, FiMail, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
// ⬇️ Vite will serve/copy this asset correctly in dev & build
import resumeHref from "../assets/Arun_Kumar_Resume.pdf";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 4);
      const sections = links.map((l) => document.querySelector(l.href));
      const offset = window.innerHeight * 0.33;
      for (const sec of sections) {
        if (!sec) continue;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          setActive(`#${sec.id}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition backdrop-blur ${scrolled ? "bg-slate-950/70 border-b border-white/10" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide hover:drop-shadow-glow"
          onClick={() => setMobileMenuOpen(false)}
        >
          Arun<span className="text-brand-400">.Design</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm hover:text-brand-300 transition ${active === l.href ? "text-brand-400" : "text-slate-200"
                  }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons (Resume & Email) */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={resumeHref}
            download="Arun_Kumar_Resume.pdf"
            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-white/10 hover:border-brand-400/60 transition"
          >
            <FiDownload className="text-brand-300" />
            <span>Resume</span>
          </a>

          <a
            href="mailto:careerarun9@gmail.com"
            className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-white/10 hover:border-brand-400/60 transition"
          >
            <FiMail className="text-brand-300" />
            <span>Say hi</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-slate-200 hover:text-white rounded-lg border border-white/10 bg-slate-900/50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ width: '40px', height: '40px' }}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 border-b border-white/10 overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={`block py-2 text-base ${active === l.href ? "text-brand-400" : "text-slate-200"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="flex flex-col gap-3">
                <a
                  href={resumeHref}
                  download="Arun_Kumar_Resume.pdf"
                  className="inline-flex items-center gap-2 text-sm text-slate-200"
                >
                  <FiDownload className="text-brand-300" />
                  <span>Resume</span>
                </a>
                <a
                  href="mailto:career"
                  className="inline-flex items-center gap-2 text-sm text-slate-200"
                >
                  <FiMail className="text-brand-300" />
                  <span>Say hi</span>
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
