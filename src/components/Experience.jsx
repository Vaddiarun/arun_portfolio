import { motion } from "framer-motion";
import { profile } from "../data/profile";

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="exp-title">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center">
          <p className="text-[11px] tracking-[0.28em] uppercase text-slate-400">Career</p>
          <h2 id="exp-title" className="text-3xl sm:text-4xl font-display font-bold text-slate-50 mt-2">
            Experience
          </h2>
          <div className="mx-auto mt-3 h-px w-28 bg-gradient-to-r from-cyan-400/60 to-fuchsia-400/40 rounded" />
        </div>

        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-6">
            {profile.experience.map((job, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative pl-10 sm:pl-12"
              >
                <span className="absolute left-3.5 sm:left-5 top-3 block h-3.5 w-3.5 rounded-full
                                  bg-gradient-to-br from-cyan-400 to-fuchsia-400 ring-2 ring-slate-900" />

                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-lg font-semibold text-slate-100">{job.position}</h3>
                    <div className="text-sm text-slate-400">{job.duration}</div>
                  </div>
                  <div className="text-slate-300 mt-1">{job.company}</div>

                  <ul className="mt-4 grid gap-2 list-disc list-inside text-slate-300">
                    {job.responsibilities.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}