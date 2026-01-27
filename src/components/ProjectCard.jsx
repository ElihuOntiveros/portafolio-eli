import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, description, tech, image, demo, repo }) {
  return (
    <motion.article
      className="glass rounded-[35px] overflow-hidden flex flex-col h-full bg-white relative cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glossy overlay handled by .glass class */}

      <div className="relative h-48 p-4 bg-white flex items-center justify-center overflow-hidden border-b-4 border-gray-100">
        {image ? (
          <img
            src={image}
            alt={`${title} icon`}
            className="w-full h-full object-contain drop-shadow-md"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 font-bold text-2xl">
            ?
          </div>
        )}
      </div>

      <div className="p-5 flex-grow flex flex-col justify-between bg-gradient-to-b from-white to-gray-50">
        <div>
          <h3 className="text-xl font-extrabold text-slate-700 mb-2 truncate text-center">{title}</h3>
          <div className="bg-slate-50/80 p-3 rounded-xl border border-white/60 shadow-inner">
            <p className="text-slate-600 text-xs text-center line-clamp-3 leading-relaxed font-medium">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-3">
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="p-2 bg-accent text-white rounded-full hover:bg-accent-2 transition-colors shadow-md">
              <FaExternalLinkAlt size={14} />
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="p-2 bg-gray-200 text-slate-600 rounded-full hover:bg-slate-300 transition-colors shadow-md">
              <FaGithub size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Wii U "Start" banner effect at bottom */}
      <div className="h-1 bg-gradient-to-r from-accent to-accent-2 w-full absolute bottom-0"></div>
    </motion.article>
  );
}
