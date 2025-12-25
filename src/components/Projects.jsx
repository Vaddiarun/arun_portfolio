import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { profile } from '../data/profile';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[0.28em] uppercase text-slate-400">Portfolio</p>
          <h2 className="text-3xl font-display font-bold text-slate-50 mt-2">Projects</h2>
          <div className="mx-auto mt-3 h-px w-28 bg-gradient-to-r from-cyan-400/60 to-fuchsia-400/40 rounded" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {profile.projects.map((project, idx) => (
            <motion.div key={idx} variants={item} className="group h-full">
              <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent transition-all duration-300 hover:scale-105 h-full">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex gap-2">
                      {project.url !== "#" && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          <FaExternalLinkAlt className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.credentials && (
                    <div className="mb-4 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                      <p className="text-xs text-slate-400 font-medium">Test Credentials:</p>
                      <p className="text-xs text-slate-300">{project.credentials}</p>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-slate-200 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}