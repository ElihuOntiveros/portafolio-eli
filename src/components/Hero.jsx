import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="text-center mt-12 mb-16 relative z-10 bg-white/40 backdrop-blur-md rounded-[50px] p-10 border-4 border-white shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="inline-block relative mb-6">
        <motion.div
          className="w-40 h-40 bg-gradient-to-br from-gray-100 to-white rounded-full border-4 border-accent shadow-lg flex items-center justify-center text-4xl font-bold text-accent mx-auto"
          whileHover={{ scale: 1.1, rotate: 5 }}
          style={{
            backgroundImage: "url(src/assets/profile.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

        </motion.div>
      </div>

      <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-slate-800 tracking-tight">
        Elihu Ontiveros
      </h1>

      <p className="text-2xl text-accent font-medium mb-6">
        Diseñador & Programador Web
      </p>

      <p className="max-w-2xl mx-auto text-slate-600 mb-8 text-lg leading-relaxed font-medium">
        Bienvenido a mi espacio digital. Aquí desarrollo experiencias modernas y eficientes.
      </p>

      <div className="flex items-center justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 font-bold text-white bg-accent rounded-full shadow-lg border-2 border-white/50 lift"
        >
          Iniciar
        </motion.button>
      </div>
    </motion.section>
  );
}
