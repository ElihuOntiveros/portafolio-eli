import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import img1 from "../assets/project1.svg";
import img2 from "../assets/project2.svg";

const projects = [
  {
    title: "DigitReports",
    description:
      "Aplicación web que recopila y muestra bases de datos Firebird sobre establecimientos, con filtros por fechas y generador de reportes.",
    tech: "React • Quarkus • Firebird",
    image: img1,
    demo: "",
    repo: "https://github.com/elihuontiveros/digitreports"
  },
  {
    title: "SneMaps",
    description:
      "Muestra vacantes laborales en un mapa usando Angular y Google Maps API. Proyecto colaborativo con el Servicio Estatal de Empleo.",
    tech: "Angular • Google Maps API • MySQL",
    image: img2,
    demo: "",
    repo: ""
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
      <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </motion.section>
  );
}
