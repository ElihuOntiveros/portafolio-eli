import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import img1 from "../assets/project1.svg";
import img2 from "../assets/project2.svg";
import img3 from "../assets/project3.svg";
import img4 from "../assets/project4.svg";

const projects = [
  {
    title: "DigitReports",
    description:
      "Aplicación web de reportes que recopila y muestra bases de datos Firebird sobre establecimientos, con filtros por fechas y un generador de reportes.",
    tech: "React • Quarkus • Firebird",
    image: img1,
    demo: "",
    repo: ""
  },
  {
    title: "Invernadero Inteligente",
    description:
      "Aplicación web para el control de un invernadero inteligente, con sensores de temperatura, humedad y luz.",
    tech: "Angular • Arduino • MySQL",
    image: img4,
    demo: "",
    repo: "https://github.com/elihuontiveros/invernadero-inteligente"
  },
  {
    title: "SneMaps",
    description:
      "Muestra vacantes laborales en un mapa usando Angular y Google Maps API. Proyecto colaborativo con el Servicio Estatal de Empleo.",
    tech: "Angular • Google Maps API • MySQL",
    image: img2,
    demo: "",
    repo: "https://github.com/elihuontiveros/snemaps"
  },
  {
    title: "TourhiApp",
    description:
      "App Móvil de realidad aumentada para mostrar monumentos históricos de Parral, Chihuahua con modelos 3D en el entorno real.",
    tech: "Kotlin • Java • Unity",
    image: img3,
    demo: "",
    repo: "https://github.com/elihuontiveros/TourhiApp"
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-white/30 backdrop-blur-sm p-8 rounded-[40px]"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-slate-700">Canales de Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}

        {/* Placeholder "Empty Channels" for aesthetic */}
        <div className="hidden lg:flex items-center justify-center bg-white/20 rounded-[35px] border-4 border-white/40 h-64 text-slate-400 font-bold text-xl shadow-inner">
          Proximamente...
        </div>
      </div>
    </motion.section>
  );
}
