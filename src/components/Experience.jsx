import { motion } from "framer-motion";

const jobs = [
  {
    title: "Diseñador y Programador Web",
    company: "Servicio Nacional del Empleo (SICWS)",
    date: "Abr 2023 - Jun 2025",
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
      <h2 className="text-3xl font-bold mb-8">Experiencia</h2>
      <div className="space-y-6">
        {jobs.map((job, i) => (
          <div key={i} className="border-l-4 border-fuchsia-500 pl-4">
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-400">{job.company}</p>
            <p className="text-sm text-gray-500 mb-1">{job.date}</p>
            <p className="text-gray-300">{job.desc}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
