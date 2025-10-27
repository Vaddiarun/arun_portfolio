// import { useEffect, useState } from "react";
// import { FiDownload, FiMail } from "react-icons/fi";

// const links = [
//   { href: "#home", label: "Home" },
//   { href: "#about", label: "About" },
//   { href: "#skills", label: "Skills" },
//   { href: "#experience", label: "Experience" },
//   { href: "#contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [active, setActive] = useState("#home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 4);
//       const sections = links.map(l => document.querySelector(l.href));
//       const offset = window.innerHeight * 0.33;
//       for (const sec of sections) {
//         if (!sec) continue;
//         const rect = sec.getBoundingClientRect();
//         if (rect.top <= offset && rect.bottom >= offset) {
//           setActive(`#${sec.id}`);
//           break;
//         }
//       }
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header className={`fixed top-0 inset-x-0 z-20 transition backdrop-blur ${scrolled ? "bg-slate-950/70 border-b border-white/10" : "bg-transparent"}`}>
//       <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//   import { useEffect, useState } from "react";
// import { FiDownload, FiMail } from "react-icons/fi";

// const links = [
//   { href: "#home", label: "Home" },
//   { href: "#about", label: "About" },
//   { href: "#skills", label: "Skills" },
//   { href: "#experience", label: "Experience" },
//   { href: "#contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [active, setActive] = useState("#home");
//   const [scrolled, setScrolled] = useState(false);

//   // Build a correct URL for the resume regardless of Vite's base path
//   const resumeHref = new URL("Akhila_P_Resume.pdf", import.meta.env.BASE_URL).toString();

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 4);
//       const sections = links.map((l) => document.querySelector(l.href));
//       const offset = window.innerHeight * 0.33;
//       for (const sec of sections) {
//         if (!sec) continue;
//         const rect = sec.getBoundingClientRect();
//         if (rect.top <= offset && rect.bottom >= offset) {
//           setActive(`#${sec.id}`);
//           break;
//         }
//       }
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 inset-x-0 z-20 transition backdrop-blur ${
//         scrolled ? "bg-slate-950/70 border-b border-white/10" : "bg-transparent"
//       }`}
//     >
//       <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         <a href="#home" className="text-lg font-semibold tracking-wide hover:drop-shadow-glow">
//           Akhila<span className="text-brand-400">.Design</span>
//         </a>

//         <ul className="hidden md:flex items-center gap-6">
//           {links.map((l) => (
//             <li key={l.href}>
//               <a
//                 href={l.href}
//                 className={`text-sm hover:text-brand-300 transition ${
//                   active === l.href ? "text-brand-400" : "text-slate-200"
//                 }`}
//               >
//                 {l.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center gap-2">
//           <a
//             href={resumeHref}
//             download="Akhila_P_Resume.pdf"
//             className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-white/10 hover:border-brand-400/60 transition"
//           >
//             <FiDownload className="text-brand-300" />
//             <span>Resume</span>
//           </a>

//           <a
//             href="mailto:ponugotiakhila2002@gmail.com"
//             className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-white/10 hover:border-brand-400/60 transition"
//           >
//             <FiMail className="text-brand-300" />
//             <span>Say hi</span>
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// }
// import { useEffect, useState } from "react";
// import { FiDownload, FiMail } from "react-icons/fi";

// const links = [
//   { href: "#home", label: "Home" },
//   { href: "#about", label: "About" },
//   { href: "#skills", label: "Skills" },
//   { href: "#experience", label: "Experience" },
//   { href: "#contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [active, setActive] = useState("#home");
//   const [scrolled, setScrolled] = useState(false);

//   // Build a correct URL for the resume regardless of Vite's base path
//   const resumeHref = new URL("Akhila_P_Resume.pdf", import.meta.env.BASE_URL).toString();

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 4);
//       const sections = links.map((l) => document.querySelector(l.href));
//       const offset = window.innerHeight * 0.33;
//       for (const sec of sections) {
//         if (!sec) continue;
//         const rect = sec.getBoundingClientRect();
//         if (rect.top <= offset && rect.bottom >= offset) {
//           setActive(`#${sec.id}`);
//           break;
//         }
//       }
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 inset-x-0 z-20 transition backdrop-blur ${
//         scrolled ? "bg-slate-950/70 border-b border-white/10" : "bg-transparent"
//       }`}
//     >
//       <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
//         <a href="#home" className="text-lg font-semibold tracking-wide hover:drop-shadow-glow">
//           Akhila<span className="text-brand-400">.Design</span>
//         </a>

//         <ul className="hidden md:flex items-center gap-6">
//           {links.map((l) => (
//             <li key={l.href}>
//               <a
//                 href={l.href}
//                 className={`text-sm hover:text-brand-300 transition ${
//                   active === l.href ? "text-brand-400" : "text-slate-200"
//                 }`}
//               >
//                 {l.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <div className="flex items-center gap-2">
//           <a
//             href={resumeHref}
//             download="Akhila_P_Resume.pdf"
//             className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-white/10 hover:border-brand-400/60 transition"
//           >
//             <FiDownload className="text-brand-300" />
//             <span>Resume</span>
//           </a>

//           <a
//             href="mailto:ponugotiakhila2002@gmail.com"
//             className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-white/10 hover:border-brand-400/60 transition"
//           >
//             <FiMail className="text-brand-300" />
//             <span>Say hi</span>
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// }

//         <ul className="hidden md:flex items-center gap-6">
//           {links.map((l) => (
//             <li key={l.href}>
//               <a
//                 href={l.href}
//                 className={`text-sm hover:text-brand-300 transition ${active === l.href ? "text-brand-400" : "text-slate-200"}`}
//               >
//                 {l.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <div className="flex items-center gap-2">
//           <a href="/Akhila_P_Resume.pdf" className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-white/10 hover:border-brand-400/60 transition">
//             <FiDownload className="text-brand-300" />
//             <span>Resume</span>
//           </a>
//           <a href="mailto:ponugotiakhila2002@gmail.com" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-white/10 hover:border-brand-400/60 transition">
//             <FiMail className="text-brand-300" />
//             <span>Say hi</span>
//           </a>
//         </div>
//       </nav>
//     </header>
//   );
// }
import { useEffect, useState } from "react";
import { FiDownload, FiMail } from "react-icons/fi";
// ⬇️ Vite will serve/copy this asset correctly in dev & build
import resumeHref from "../assets/Akhila_P_Resume (3).pdf";

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
    <header className={`fixed top-0 inset-x-0 z-20 transition backdrop-blur ${scrolled ? "bg-slate-950/70 border-b border-white/10" : "bg-transparent"}`}>
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold tracking-wide hover:drop-shadow-glow">
          Akhila<span className="text-brand-400">.Design</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm hover:text-brand-300 transition ${active === l.href ? "text-brand-400" : "text-slate-200"}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={"https://asset.cloudinary.com/dfxkazmkc/af11e46001111c9d0914808b57b550b0"}
            download="Akhila_P_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-white/10 hover:border-brand-400/60 transition"
          >
            <FiDownload className="text-brand-300" />
            <span>Resume</span>
          </a>

          <a href="mailto:ponugotiakhila2002@gmail.com" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-xl border border-white/10 hover:border-brand-400/60 transition">
            <FiMail className="text-brand-300" />
            <span>Say hi</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
