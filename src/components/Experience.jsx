import { motion } from "framer-motion";

const jobs = [
  {
    title: "Diseñador y Programador Web",
    company: "SICWS",
    date: "Ene 2025 - Abril 2025",
    desc: "Diseño y programación de páginas web, hosting y manejo de bases de datos.",
  },
  {
    title: "Diseñador y Programador Web",
    company: "Servicio Nacional del Empleo (SNE)",
    date: "Abr 2023 - Sep 2023",
    desc: "Diseño y programación de páginas web, hosting y manejo de bases de datos.",
  },
  {
    title: "Capturista de datos",
    company: "Instituto Estatal Electoral",
    date: "Mar 2022 - Jun 2022",
    desc: "Captura de documentos y boletas en procesos electorales.",
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">Experiencia</h2>
      <div className="space-y-6">
        {jobs.map((job, i) => (
          <div key={i} className="glass p-6 rounded-3xl bg-white/70 hover:bg-white/90 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-800 mb-1">{job.title}</h3>
              <div className="inline-block px-3 py-1 bg-white rounded-lg shadow-sm border border-slate-100 mb-2">
                <p className="font-bold text-sm bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">{job.company}</p>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium bg-white/40 p-3 rounded-xl border border-white/50">
                {job.desc}
              </p>
            </div>
            <div className="sm:text-right">
              <span className="inline-block px-4 py-2 text-white rounded-full text-sm font-bold shadow-md bg-gradient-to-r from-purple-600 to-cyan-500">
                {job.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
