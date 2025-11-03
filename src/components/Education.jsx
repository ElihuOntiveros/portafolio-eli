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
      <h2 className="text-3xl font-bold mb-8">Educación</h2>
      <div className="space-y-6">
        {studies.map((s, i) => (
          <div key={i} className="bg-gray-800 p-5 rounded-xl">
            <h3 className="text-xl font-semibold text-cyan-400">{s.title}</h3>
            <p className="text-gray-400">{s.school}</p>
            <p className="text-sm text-gray-500">{s.date}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
