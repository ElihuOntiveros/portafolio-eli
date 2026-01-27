import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Background from "./components/Background";

function App() {
  return (
    <div className="relative isolate min-h-screen font-sans text-slate-800">
      <Background />
      <div className="max-w-7xl mx-auto p-4 sm:p-8 space-y-12">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <motion.footer
          className="text-center text-sm text-gray-400 mt-16 pb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © {new Date().getFullYear()} Elihu Ontiveros — Todos los derechos reservados.
        </motion.footer>
      </div>
    </div>
  );
}

export default App;
