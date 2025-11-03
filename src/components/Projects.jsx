import { motion } from "framer-motion";

const projects = [
  {
    title: "DigitReports",
    description:
      "Aplicación web que recopila y muestra bases de datos Firebird sobre establecimientos, con filtros por fechas y generador de reportes en React y Quarkus.",
    tech: "React • Quarkus • Firebird",
  },
  {
    title: "SneMaps",
    description:
      "Proyecto colaborativo con el Servicio Estatal de Empleo. Muestra vacantes laborales en un mapa usando Angular, Google Maps API y MySQL.",
    tech: "Angular • Google Maps API • MySQL",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-fuchsia-500/20 transition"
          >
            <h3 className="text-2xl font-semibold text-fuchsia-400 mb-2">
              {p.title}
            </h3>
            <p className="text-gray-300 mb-3">{p.description}</p>
            <p className="text-sm text-cyan-300">{p.tech}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
