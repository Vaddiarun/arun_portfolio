// import { useEffect, useRef } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Experience from "./components/Experience";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ThreeBackground from "./components/ThreeBackground";

// export default function App() {
//   const appRef = useRef(null);

//   useEffect(() => {
//     // Optional: section highlighting etc.
//   }, []);

//   return (
//     <div ref={appRef} className="relative min-h-screen font-body selection:bg-brand-500/30">
//       {/* 3D animated background */}
//       <ThreeBackground />

//       {/* Foreground content */}
//       <div className="relative z-10">
//         <Navbar />
//         <main>
//           <section id="home" className="min-h-[100dvh] grid place-items-center">
//             <Hero />
//           </section>

//           <section id="about" className="min-h-[90dvh] grid place-items-center">
//             <About />
//           </section>

//           <section id="skills" className="min-h-[90dvh] grid place-items-center">
//             <Skills />
//           </section>

//           <section id="experience" className="min-h-[90dvh] grid place-items-center">
//             <Experience />
//           </section>

//           <section id="contact" className="min-h-[70dvh] grid place-items-center">
//             <Contact />
//           </section>
//         </main>
//         <Footer />
//       </div>

//       {/* Subtle background grid overlay for depth */}
//       <div className="pointer-events-none fixed inset-0 bg-grid opacity-30"></div>
//     </div>
//   );
// }
// App.jsx (example)
import ThreeBackground from "./components/ThreeBackground";
import HeroSplit from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative">
      <ThreeBackground />
      <div className="relative z-10">
        <HeroSplit />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}
