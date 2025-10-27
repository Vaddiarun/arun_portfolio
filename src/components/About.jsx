import { motion } from "framer-motion";
import { profile } from "../data/profile";

function Check({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0L3.3 9.9a1 1 0 1 1 1.4-1.4l3 3 6.5-6.5a1 1 0 0 1 1.5 0z"/>
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="mb-8">
          <p className="text-[11px] tracking-[0.28em] uppercase text-slate-400">About me</p>
          <h2 id="about-title" className="text-3xl sm:text-4xl font-display font-bold text-slate-50 mt-2">
            Developer who delivers
          </h2>
          <div className="mt-3 h-px w-28 bg-gradient-to-r from-cyan-400/60 to-fuchsia-400/40 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-10">
          <div className="md:col-span-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-6 py-6">
              <p className="text-slate-300 leading-relaxed">
                Frontend Developer with 2 years of experience specializing in React.js, Tailwind CSS, and modern web technologies. I build responsive, user-centric applications with focus on performance and scalability.
              </p>
              <p className="text-slate-300 leading-relaxed mt-4">
                Currently at GND Solutions, developing IoT platform interfaces and real-time data visualization systems. Experienced in AWS deployment, API integration, and cross-browser compatibility.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Frontend development with React.js, Tailwind CSS, and modern JavaScript",
                  "Real-time IoT data integration and responsive web applications",
                  "AWS Amplify deployment and cloud hosting solutions",
                  "Cross-browser compatibility and performance optimization",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <span className="mt-1 text-cyan-300/90"><Check /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { k: "2+ yrs", v: "Experience" },
                  { k: "React.js", v: "Frontend Expert" },
                  { k: "AWS", v: "Cloud Ready" },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <div className="text-sm text-slate-400">{s.v}</div>
                    <div className="text-lg font-semibold text-slate-100">{s.k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="relative rounded-3xl p-[1.2px] bg-gradient-to-br from-white/25 via-white/10 to-transparent">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur px-6 py-6">
                <h3 className="font-semibold text-slate-100">Contact</h3>
                <div className="mt-4 space-y-2 text-slate-300">
                  <p>
                    <span className="text-slate-400">Email:</span>{" "}
                    <a className="hover:text-cyan-300 underline underline-offset-2" href={`mailto:${profile.email}`}>
                      {profile.email}
                    </a>
                  </p>
                  <p>
                    <span className="text-slate-400">Phone:</span>{" "}
                    <a className="hover:text-cyan-300 underline underline-offset-2" href={`tel:${profile.phone}`}>
                      {profile.phone}
                    </a>
                  </p>
                  <p><span className="text-slate-400">Location:</span> {profile.location}</p>
                </div>
                <div className="mt-6 text-sm text-slate-400">
                  {profile.education[0].degree} -  {profile.education[0].institution}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}