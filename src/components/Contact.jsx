
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="relative rounded-3xl p-[1.2px] bg-gradient-to-br from-white/25 via-white/10 to-transparent shadow-[0_10px_60px_-10px_rgba(56,189,248,0.25)]">
          <div className="rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur px-6 sm:px-10 py-10 text-center">
            <p className="text-[11px] tracking-[0.28em] uppercase text-slate-400">Get in touch</p>
            <h2 id="contact-title" className="mt-2 text-3xl font-display font-bold text-slate-50">
              Let’s build something great
            </h2>
            <p className="mt-3 text-slate-300">
              Open to full-time and freelance roles in product design and front-end integration.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="mailto:careerarun9@gmail.com"
                className="px-5 py-3 rounded-2xl text-sm font-medium text-white
                           bg-gradient-to-r from-cyan-500 to-fuchsia-500
                           shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40
                           hover:-translate-y-0.5 transition"
              >
                Email me
              </a>
              <a
                href="tel:+916036001929"
                className="px-5 py-3 rounded-2xl text-sm font-medium text-slate-200
                           border border-white/15 hover:border-white/25 hover:text-white transition"
              >
                Call / WhatsApp
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Typical response time: &lt; 24 hours
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
