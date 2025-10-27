import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaGitAlt, FaAws, FaDatabase
} from "react-icons/fa";
import {
  SiTailwindcss, SiRedux
} from "react-icons/si";
import { profile } from '../data/profile';

const skillIcons = {
  "HTML": { icon: FaHtml5, hue: 15 },
  "CSS": { icon: FaCss3Alt, hue: 210 },
  "Bootstrap": { icon: FaBootstrap, hue: 270 },
  "Tailwind CSS": { icon: SiTailwindcss, hue: 195 },
  "JavaScript": { icon: FaJs, hue: 45 },
  "React.js": { icon: FaReact, hue: 190 },
  "Redux": { icon: SiRedux, hue: 270 },
  "Redux Persister": { icon: SiRedux, hue: 285 },
  "REST API": { icon: FaJs, hue: 120 },
  "RESTful APIs": { icon: FaJs, hue: 135 },
  "AWS Amplify": { icon: FaAws, hue: 30 },
  "Git": { icon: FaGitAlt, hue: 15 },
  "Bitbucket": { icon: FaGitAlt, hue: 210 },
  "Jira": { icon: FaDatabase, hue: 240 },
  "SQLite": { icon: FaDatabase, hue: 200 }
};

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 15 } } };

function colors(h) {
  return {
    halo: `hsl(${h} 85% 65%)`,
    gradient: `linear-gradient(135deg, hsl(${h} 85% 65%), hsl(${(h + 30) % 360} 85% 65%)`
  };
}

export default function Skills() {
  const allSkills = [];
  
  Object.entries(profile.skills).forEach(([category, skills]) => {
    skills.forEach(skill => {
      const iconData = skillIcons[skill];
      if (iconData) {
        allSkills.push({
          name: skill,
          category: category,
          ...iconData
        });
      }
    });
  });

  return (
    <section id="skills" aria-labelledby="skills-title">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center">
          <p className="text-[11px] tracking-[0.28em] uppercase text-slate-400">Capabilities</p>
          <h2 id="skills-title" className="text-3xl font-display font-bold text-slate-50 mt-2">Skills</h2>
          <div className="mx-auto mt-3 h-px w-28 bg-gradient-to-r from-cyan-400/60 to-fuchsia-400/40 rounded" />
        </div>

        <motion.ul role="list" className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {allSkills.map(({ name, icon: Icon, hue }, idx) => {
            const { halo, gradient } = colors(hue);
            return (
              <motion.li key={idx} role="listitem" variants={item}>
                <div className="group relative rounded-xl p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent transition-all duration-300 hover:scale-105">
                  <div className="rounded-xl border border-white/10 bg-slate-950/70 backdrop-blur px-3 py-4 text-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <div className="mx-auto relative flex h-10 w-10 items-center justify-center mb-2">
                      <span 
                        className="absolute inset-0 rounded-lg blur-lg opacity-30 group-hover:opacity-50 transition-opacity" 
                        style={{ backgroundColor: halo }}
                        aria-hidden 
                      />
                      <div 
                        className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5"
                        style={{ background: gradient }}
                      >
                        <Icon className="h-5 w-5 text-white" aria-hidden />
                      </div>
                    </div>
                    <div className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">
                      {name}
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
}