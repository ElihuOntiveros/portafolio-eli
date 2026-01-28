import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import profileYTImg from "../assets/profileYT.webp";
export default function Header() {
  return (
    <>
      <motion.header
        className="glass px-4 py-3 mb-6 mx-6 rounded-xl flex items-center justify-between"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent2 flex items-center justify-center text-black font-bold" style={{
            backgroundImage: `url(${profileYTImg})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}></div>
          <div className="font-semibold text-lg">Elihu Ontiveros</div>
        </div>
        <nav className="hidden sm:flex gap-4 text-sm text-cyan-600 font-semibold">
          <a href="#about" className="hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-all">Sobre</a>
          <a href="#projects" className="hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-all">Proyectos</a>
          <a href="#contact" className="hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 hover:bg-clip-text hover:text-transparent transition-all">Contacto</a>
        </nav>
        <button className="sm:hidden text-dark-300"
          onClick={() => document.getElementById('mobile-menu').classList.toggle('hidden')}>
          <FaBars />
        </button>
      </motion.header>
      <motion.div
        id="mobile-menu"
        className="hidden sm:hidden glass mx-6 rounded-xl overflow-hidden mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col gap-1 p-2">
          <a
            href="#about"
            className="block px-5 py-4 text-base font-semibold text-cyan-600 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-500/20 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            onClick={() => document.getElementById('mobile-menu').classList.add('hidden')}
          >
            Sobre
          </a>
          <a
            href="#projects"
            className="block px-5 py-4 text-base font-semibold text-cyan-600 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-500/20 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            onClick={() => document.getElementById('mobile-menu').classList.add('hidden')}
          >
            Proyectos
          </a>
          <a
            href="#contact"
            className="block px-5 py-4 text-base font-semibold text-cyan-600 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-500/20 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            onClick={() => document.getElementById('mobile-menu').classList.add('hidden')}
          >
            Contacto
          </a>
        </nav>
      </motion.div>
    </>
  );
}
