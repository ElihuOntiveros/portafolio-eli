import { motion } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-32">
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
