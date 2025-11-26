import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, description, tech, image, demo, repo }) {
  return (
    <motion.article
      className="glass rounded-2xl overflow-hidden lift"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
    >
      <div className="h-40 sm:h-48 bg-black flex items-center justify-center">
        {image ? (
          // SVG or img
          <img src={image} alt={`${title} preview`} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400">No preview</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-accent2 mb-1">{title}</h3>
        <p className="text-gray-300 mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm text-accent">{tech}</p>
          <div className="flex gap-3">
            {demo && (
              <a href={demo} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-accent transition">
                <FaExternalLinkAlt />
              </a>
            )}
            {repo && (
              <a href={repo} target="_blank" rel="noreferrer" className="text-gray-300 hover:text-accent transition">
                <FaGithub />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
