// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-tr from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white">
      
      {/* Floating animated blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-15%] w-[30rem] h-[30rem] bg-cyan-400/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Shimmer Text */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`,
        }}
        className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 animate-shimmer bg-[length:200%_auto] drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]"
      >
        SATYABRATA BEHERA
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 max-w-2xl text-lg md:text-2xl text-gray-200 text-center leading-relaxed"
      >
        Crafting{" "}
        <span className="text-yellow-300 font-semibold">
          high-performance
        </span>{" "}
        &{" "}
        <span className="text-cyan-300 font-semibold">
          future-ready
        </span>{" "}
        applications with <span className="text-yellow-300">Java Full Stack</span> expertise.
      </motion.p>

      {/* CTA Buttons with glass effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-10 flex gap-6"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-white/10 backdrop-blur-md border border-yellow-400 text-yellow-300 font-bold rounded-full shadow-lg hover:bg-yellow-300 hover:text-gray-900 transition-all duration-300 hover:scale-110 relative overflow-hidden"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-white/10 backdrop-blur-md border border-cyan-400 text-cyan-300 font-bold rounded-full hover:bg-cyan-300 hover:text-gray-900 transition-all duration-300 hover:scale-110 relative overflow-hidden"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Extra CSS for shimmer */}
      <style>{`
        .animate-shimmer {
          background-image: linear-gradient(
            90deg,
            rgba(255, 215, 0, 0.2) 0%,
            rgba(255, 255, 255, 0.6) 50%,
            rgba(255, 215, 0, 0.2) 100%
          );
          animation: shimmer 3s infinite linear;
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}


