import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
      <p className="text-gray-300 leading-relaxed">
        Ingeniero en Sistemas de la Información con experiencia en desarrollo web y
        electrónica. He trabajado en proyectos utilizando tecnologías como React,
        Angular, Quarkus, MySQL y Firebird. Me apasiona diseñar interfaces limpias y
        funcionales, optimizar rendimiento y ofrecer soluciones intuitivas.
      </p>
    </motion.section>
  );
}
