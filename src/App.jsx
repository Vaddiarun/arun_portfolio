
import ThreeBackground from "./components/ThreeBackground";
import HeroSplit from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="relative">
      <ThreeBackground />
      <div className="relative z-10">
        <HeroSplit />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
      <ScrollToTop />
    </div>
  );
}
