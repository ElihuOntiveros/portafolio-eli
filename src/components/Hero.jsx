import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="text-center mt-10"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
  <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-accent2 to-accent bg-clip-text text-transparent">
        Elihu Ontiveros
      </h1>
      <p className="text-xl sm:text-2xl text-gray-300 mb-6">
        Diseñador y Programador Web
      </p>
      <p className="max-w-2xl mx-auto text-gray-400 mb-6">
        Apasionado por crear aplicaciones web modernas y eficientes con experiencia en
        React, Angular, Quarkus y bases de datos SQL.
      </p>
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="glass lift px-6 py-2 font-semibold text-black bg-gradient-to-r from-accent to-accent2 rounded-lg"
        >
          Ver proyectos
        </button>
        <a href="#contact" className="text-sm text-muted hover:text-accent transition">Contactarme</a>
      </div>
    </motion.section>
  );
}
