import { motion } from "framer-motion";
import profileImg from "../assets/profile.webp";

export default function Hero() {
  return (
    <motion.section
      className="text-center mt-12 mb-16 relative z-10 bg-white/40 backdrop-blur-md rounded-[50px] p-10 border-4 border-white shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="inline-block relative mb-6">
        {/* Gradient border wrapper */}
        <div className="p-1 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500"
          style={{
            boxShadow: "0 0 30px rgba(182, 4, 247, 0.4), 0 0 50px rgba(10, 230, 250, 0.3)"
          }}>
          <motion.div
            className="w-40 h-40 rounded-full flex items-center justify-center mx-auto"
            whileHover={{ scale: 1.05, rotate: 5 }}
            style={{
              backgroundImage: `url(${profileImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
          </motion.div>
        </div>
      </div>

      <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-slate-800 tracking-tight">
        Elihu Ontiveros
      </h1>

      <p className="text-2xl font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
        Diseñador & Programador Web
      </p>

      <p className="max-w-2xl mx-auto text-slate-600 mb-8 text-lg leading-relaxed font-medium">
        Bienvenido a mi portafolio digital. Aquí desarrollo experiencias modernas y eficientes.
      </p>

      <div className="flex items-center justify-center gap-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-4 font-bold text-white rounded-full shadow-lg border-2 border-white/50 lift"
          style={{
            background: "linear-gradient(135deg, #b604f7 0%, #0ae6fa 100%)"
          }}
        >
          Iniciar
        </motion.button>
      </div>
    </motion.section>
  );
}
