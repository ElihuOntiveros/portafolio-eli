import { motion } from "framer-motion";

const studies = [
  {
    title: "Ingeniería en Sistemas de la Información, Redes Inteligentes y Ciberseguridad",
    school: "Universidad Tecnológica de Parral",
    date: "Sep 2020 - Abr 2025",
  },
  {
    title: "Profesional Técnico Bachiller en Informática",
    school: "CONALEP 156",
    date: "Ago 2017 - Jul 2020",
  },
];

export default function Education() {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-slate-800 text-center">Educación</h2>
      <div className="space-y-6">
        {studies.map((s, i) => (
          <div key={i} className="glass p-6 rounded-3xl bg-white/70 hover:bg-white/90 transition-colors flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{s.title}</h3>
              <div className="inline-block px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-100 mb-2">
                <p className="text-accent font-bold text-sm">{s.school}</p>
              </div>
            </div>
            <div className="sm:text-right">
              <span className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-bold shadow-md">
                {s.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
