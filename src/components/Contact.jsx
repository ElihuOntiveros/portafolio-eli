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
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <p className="text-gray-400 mb-4">Conecta conmigo a través de mis redes profesionales:</p>
      <div className="flex justify-center gap-4">
        <a
          href="mailto:elihu@example.com"
          className="glass p-3 rounded-lg text-gray-200 hover:shadow-lg transition flex items-center gap-2"
        >
          <FaEnvelope /> <span className="text-sm">Email</span>
        </a>
        <a
          href="https://github.com/elihuontiveros"
          target="_blank"
          rel="noopener noreferrer"
          className="glass p-3 rounded-lg text-gray-200 hover:shadow-lg transition flex items-center gap-2"
        >
          <FaGithub /> <span className="text-sm">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/martin-elihu-ontiveros-escarcega/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass p-3 rounded-lg text-gray-200 hover:shadow-lg transition flex items-center gap-2"
        >
          <FaLinkedin /> <span className="text-sm">LinkedIn</span>
        </a>
      </div>
    </motion.section>
  );
}
