import { motion } from "framer-motion";
import { FaReact, FaAngular, FaDatabase, FaUnity, FaAndroid } from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";


export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=""
    >
      <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">Sobre mí</h2>
      <div className="glass p-8 rounded-[40px] bg-white/60 backdrop-blur-xl shadow-sm border border-white/60">
        <div className="bg-white/50 p-6 rounded-3xl border border-white/60 mb-6 shadow-sm">
          <p className="text-slate-700 leading-relaxed text-lg font-medium">
            Ingeniero en Tecnologías de la Información Redes Inteligentes y Ciberseguridad con experiencia en desarrollo. He trabajado en proyectos utilizando tecnologías como React,
            Angular, Android Studio, Unity, MySQL,Firebird y Godot. Me apasiona diseñar interfaces limpias y
            funcionales, optimizar rendimiento y ofrecer soluciones intuitivas.
          </p>
        </div>
        <div className="flex gap-4 flex-wrap justify-center">
          <span className="px-5 py-2 bg-white text-slate-700 text-sm font-bold rounded-full shadow-sm flex items-center gap-2 border border-slate-100"><FaReact className="text-[#61DAFB] text-lg" /> React</span>
          <span className="px-5 py-2 bg-white text-slate-700 text-sm font-bold rounded-full shadow-sm flex items-center gap-2 border border-slate-100"><FaAngular className="text-[#DD0031] text-lg" /> Angular</span>
          <span className="px-5 py-2 bg-white text-slate-700 text-sm font-bold rounded-full shadow-sm flex items-center gap-2 border border-slate-100"><FaDatabase className="text-slate-500 text-lg" /> MySQL</span>
          <span className="px-5 py-2 bg-white text-slate-700 text-sm font-bold rounded-full shadow-sm flex items-center gap-2 border border-slate-100"><FaUnity className="text-slate-500 text-lg" /> Unity</span>
          <span className="px-5 py-2 bg-white text-slate-700 text-sm font-bold rounded-full shadow-sm flex items-center gap-2 border border-slate-100"><FaAndroid className="text-slate-500 text-lg" /> Android Studio</span>
          <span className="px-5 py-2 bg-white text-slate-700 text-sm font-bold rounded-full shadow-sm flex items-center gap-2 border border-slate-100"><SiGodotengine className="text-slate-500 text-lg" /> Godot</span>
        </div>
      </div>
    </motion.section>
  );
}
