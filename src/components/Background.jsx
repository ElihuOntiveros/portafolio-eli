import { motion } from "framer-motion";
import { FaReact, FaAngular, FaJava, FaPhp, FaAndroid, FaUnity } from "react-icons/fa";
import { SiGodotengine } from "react-icons/si";

export default function Background() {
  const icons = [
    { Icon: FaReact, color: "text-blue-400" },
    { Icon: FaAngular, color: "text-red-500" },
    { Icon: FaJava, color: "text-orange-500" },
    { Icon: FaPhp, color: "text-indigo-400" },
    { Icon: FaAndroid, color: "text-cyan-500" },
    { Icon: FaUnity, color: "text-gray-200" },
    { Icon: SiGodotengine, color: "text-blue-500" },
  ];

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-slate-50">
      {/* Stronger radial gradient with purple-cyan tones */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,#e9d5ff,#a5f3fc,transparent_90%)] opacity-60"></div>

      {/* Floating orbs in brand colors */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }}></div>

      {/* Floating Tech Icons with brand color glow */}
      {icons.map(({ Icon, color }, i) => (
        <motion.div
          key={`icon-${i}`}
          className={`absolute ${color} opacity-20 drop-shadow-lg`}
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            filter: 'drop-shadow(0 0 8px rgba(182, 4, 247, 0.3)) drop-shadow(0 0 12px rgba(10, 230, 250, 0.2))'
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
