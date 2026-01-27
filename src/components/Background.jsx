import { motion } from "framer-motion";
import { FaReact, FaAngular, FaJava, FaPhp, FaAndroid, FaUnity } from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";

export default function Background() {
  const icons = [
    { Icon: FaReact, color: "text-blue-400" },
    { Icon: FaAngular, color: "text-red-500" },
    { Icon: FaJava, color: "text-orange-500" },
    { Icon: FaPhp, color: "text-indigo-400" },
    { Icon: FaAndroid, color: "text-green-500" },
    { Icon: FaUnity, color: "text-gray-200" },
    { Icon: SiGodotengine, color: "text-blue-500" },
  ];

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50">
      {/* Stronger radial gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#dbeafe,transparent_90%)] opacity-80"></div>

      {/* Floating Colored Blobs (Base Ambiance) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`blob-${i}`}
          className={`absolute rounded-full blur-3xl opacity-30 mix-blend-multiply ${i % 2 === 0 ? "bg-cyan-200" : "bg-lime-200"
            }`}
          style={{
            width: Math.random() * 400 + 200,
            height: Math.random() * 400 + 200,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Tech Icons */}
      {icons.map(({ Icon, color }, i) => (
        <motion.div
          key={`icon-${i}`}
          className={`absolute ${color} opacity-20 drop-shadow-lg`}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <Icon size={Math.random() * 50 + 80} />
        </motion.div>
      ))}

      {/* Grid pattern overlay for that "tech" feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
    </div>
  );
}
