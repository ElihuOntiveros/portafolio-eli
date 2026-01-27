import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-slate-800">Contacto</h2>
      <p className="text-slate-600 mb-8 font-medium">Conecta conmigo a través de mis redes profesionales:</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="mailto:elihu@example.com"
          className="glass px-6 py-3 rounded-full text-slate-600 font-bold bg-white hover:bg-slate-50 hover:text-accent transition flex items-center gap-2 group shadow-md border border-white/50"
        >
          <FaEnvelope className="group-hover:scale-110 transition-transform" /> <span className="text-sm">Email</span>
        </a>
        <a
          href="https://github.com/elihuontiveros"
          target="_blank"
          rel="noopener noreferrer"
          className="glass px-6 py-3 rounded-full text-slate-600 font-bold bg-white hover:bg-slate-50 hover:text-black transition flex items-center gap-2 group shadow-md border border-white/50"
        >
          <FaGithub className="group-hover:scale-110 transition-transform" /> <span className="text-sm">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/martin-elihu-ontiveros-escarcega/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass px-6 py-3 rounded-full text-slate-600 font-bold bg-white hover:bg-slate-50 hover:text-[#0077b5] transition flex items-center gap-2 group shadow-md border border-white/50"
        >
          <FaLinkedin className="group-hover:scale-110 transition-transform" /> <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </motion.section>
  );
}
