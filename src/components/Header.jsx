import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <motion.header
      className="glass px-4 py-3 mb-6 mx-6 rounded-xl flex items-center justify-between"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-black font-bold">EO</div>
        <div className="font-semibold text-lg">Elihu Ontiveros</div>
      </div>
      <nav className="hidden sm:flex gap-4 text-sm text-gray-300">
        <a href="#about" className="hover:text-accent transition">Sobre</a>
        <a href="#projects" className="hover:text-accent transition">Proyectos</a>
        <a href="#contact" className="hover:text-accent transition">Contacto</a>
      </nav>
      <button className="sm:hidden text-gray-300">
        <FaBars />
      </button>
    </motion.header>
  );
}
