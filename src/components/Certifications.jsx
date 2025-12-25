import { motion } from "framer-motion";
import { profile } from '../data/profile';
import { FaAward, FaBuilding, FaCalendarAlt } from "react-icons/fa";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Certifications() {
    if (!profile.certifications || profile.certifications.length === 0) return null;

    return (
        <section id="certifications" className="py-20 bg-slate-900/10">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={container}
                className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <div className="text-center mb-12">
                    <p className="text-[11px] tracking-[0.28em] uppercase text-slate-400">Credentials</p>
                    <h2 className="text-3xl font-display font-bold text-slate-50 mt-2">Certifications</h2>
                    <div className="mx-auto mt-3 h-px w-28 bg-gradient-to-r from-cyan-400/60 to-fuchsia-400/40 rounded" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {profile.certifications.map((cert, idx) => (
                        <motion.div key={idx} variants={item} className="group h-full">
                            <div className="relative h-full rounded-2xl p-[1px] bg-gradient-to-br from-white/10 via-white/5 to-transparent transition-all duration-300 hover:scale-105">
                                <div className="rounded-2xl border border-white/5 bg-slate-950/40 backdrop-blur p-5 h-full flex flex-col">

                                    <div className="flex items-start justify-between mb-3">
                                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                                            <FaAward className="w-5 h-5" />
                                        </div>
                                        {cert.date && (
                                            <span className="text-xs text-slate-500 font-medium flex items-center gap-1 bg-slate-800/50 px-2 py-1 rounded">
                                                <FaCalendarAlt className="w-3 h-3" /> {cert.date}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-lg font-semibold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">
                                        {cert.name}
                                    </h3>

                                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                                        <FaBuilding className="w-3 h-3" />
                                        <span>{cert.issuer}</span>
                                    </div>

                                    {cert.description && (
                                        <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                                            {cert.description}
                                        </p>
                                    )}

                                    <div className="mt-auto pt-4 border-t border-white/5">
                                        {cert.skills && cert.skills.length > 0 && (
                                            <div className="flex flex-wrap gap-1 mb-3">
                                                {cert.skills.slice(0, 3).map((skill, i) => (
                                                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800/60 text-slate-300 border border-slate-700/50">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="text-[10px] text-slate-500 font-mono break-all">
                                            ID: {cert.id}
                                        </div>
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
