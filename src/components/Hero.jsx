import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { profile } from "../data/profile";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } } };
const itemUp = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 130, damping: 16 } } };

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="md:col-span-7">

            <motion.div variants={itemUp} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
              <span className="relative inline-flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <a href="https://gndsolutions.in/" target="_blank" rel="noopener noreferrer" >
                Working At GND SOLUTIONS INDIA PVT. LTD.
              </a>

            </motion.div>

            <motion.h1 variants={itemUp} className="mt-4 text-4xl sm:text-6xl font-display font-extrabold leading-tight text-slate-50">
              {profile.name.split(' ')[0]} <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">{profile.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.p variants={itemUp} className="mt-4 max-w-xl text-slate-300 text-base sm:text-lg leading-relaxed">
              {profile.headline}
            </motion.p>

            <motion.div variants={itemUp} className="mt-6 grid grid-cols-3 max-w-md gap-3">
              {[
                { k: "2.8+ yrs", v: "Experience" },
                { k: "React.js", v: "Frontend Expert" },
                { k: "AWS", v: "Cloud Ready" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-[11px] text-slate-400">{s.v}</div>
                  <div className="text-lg font-semibold text-slate-100">{s.k}</div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemUp} className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition">
                Let's work together <FaArrowRight className="opacity-90" />
              </a>
              <a href="#experience" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-200 border border-white/15 hover:border-white/25 hover:text-white transition">
                View experience
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-slate-200 border border-white/15 hover:border-white/25 hover:text-white transition">
                LinkedIn Profile
              </a>
            </motion.div>
            <motion.p variants={itemUp} className="mt-6 text-xs text-slate-400">
              Scroll down to learn more about my work and experience
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}