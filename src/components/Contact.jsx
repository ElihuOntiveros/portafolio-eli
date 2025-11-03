import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p className="text-gray-400 mb-4">
        Conecta conmigo a través de mis redes profesionales:
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/elihuontiveros"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-300 hover:text-fuchsia-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/martin-elihu-ontiveros-escarcega/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-300 hover:text-cyan-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </motion.section>
  );
}
