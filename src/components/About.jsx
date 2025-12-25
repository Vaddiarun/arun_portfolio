import { motion } from "framer-motion";
import { profile } from "../data/profile";

function Check({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.2 7.2a1 1 0 0 1-1.4 0L3.3 9.9a1 1 0 1 1 1.4-1.4l3 3 6.5-6.5a1 1 0 0 1 1.5 0z" />
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
            <div className="rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur px-6 py-6 h-full">
              <p className="text-slate-300 leading-relaxed">
                Frontend Developer with 2.8+ years of experience specializing in React.js, Tailwind CSS, and modern web technologies. I build responsive, user-centric applications with focus on performance and scalability.
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
                  { k: "2.8+ yrs", v: "Experience" },
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
            <div className="relative rounded-3xl p-[1.2px] bg-gradient-to-br from-white/25 via-white/10 to-transparent h-full">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur px-6 py-6 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-6 flex justify-center">
                    <div className="relative w-40 h-40 rounded-full p-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                      <img
                        src={profile.imgUrl}
                        alt={profile.name}
                        className="w-full h-full rounded-full object-cover border-4 border-slate-900"
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-slate-100 text-center text-xl mb-1">{profile.name}</h3>
                  <p className="text-sm text-slate-400 text-center mb-6">{profile.role}</p>

                  <div className="space-y-4 text-slate-300">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 rounded bg-white/5 text-cyan-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      </div>
                      <div className="text-sm flex-1">
                        <div className="text-xs text-slate-500 mb-0.5">Email</div>
                        <a href={`mailto:${profile.email}`} className="hover:text-cyan-300 transition-colors break-all">
                          {profile.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 rounded bg-white/5 text-cyan-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      </div>
                      <div className="text-sm flex-1">
                        <div className="text-xs text-slate-500 mb-0.5">Phone</div>
                        <a href={`tel:${profile.phone}`} className="hover:text-cyan-300 transition-colors">
                          {profile.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 rounded bg-white/5 text-cyan-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </div>
                      <div className="text-sm flex-1">
                        <div className="text-xs text-slate-500 mb-0.5">Location</div>
                        {profile.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 text-xs text-slate-500 text-center">
                  {profile.education[0].degree}
                  <div className="mt-1 text-slate-600">{profile.education[0].institution}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}