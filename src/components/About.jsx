import { motion } from "framer-motion";
import { FaReact, FaAngular, FaDatabase } from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=""
    >
      <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
      <div className="glass p-6 rounded-xl">
        <p className="text-gray-300 leading-relaxed mb-4">
          Ingeniero en Sistemas de la Información con experiencia en desarrollo web y
          electrónica. He trabajado en proyectos utilizando tecnologías como React,
          Angular, Quarkus, MySQL y Firebird. Me apasiona diseñar interfaces limpias y
          funcionales, optimizar rendimiento y ofrecer soluciones intuitivas.
        </p>
        <div className="flex gap-3 flex-wrap">
          <span className="px-3 py-1 bg-panel text-sm rounded-lg flex items-center gap-2"><FaReact className="text-accent"/> React</span>
          <span className="px-3 py-1 bg-panel text-sm rounded-lg flex items-center gap-2"><FaAngular className="text-accent2"/> Angular</span>
          <span className="px-3 py-1 bg-panel text-sm rounded-lg flex items-center gap-2"><FaDatabase className="text-muted"/> SQL</span>
        </div>
      </div>
    </motion.section>
  );
}
