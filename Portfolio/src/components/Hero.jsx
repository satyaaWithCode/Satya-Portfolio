

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMui,
  SiSpringboot,
  SiSpringsecurity,
  SiApachekafka,
  SiApachespark,
  SiApacheairflow,
} from "react-icons/si";

import { BiNetworkChart } from "react-icons/bi";
import { TbSql } from "react-icons/tb";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "Core Java", icon: <FaJava className="text-red-500 text-3xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: "Tailwind CSS", icon: <SiMui className="text-cyan-400 text-3xl" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-3xl" /> },
    { name: "Spring Security", icon: <SiSpringsecurity className="text-green-700 text-3xl" /> },
    { name: "Microservices", icon: <BiNetworkChart className="text-purple-400 text-3xl" /> },
    { name: "Kafka", icon: <SiApachekafka className="text-black text-3xl" /> },
    { name: "WebSocket", icon: <BiNetworkChart className="text-pink-400 text-3xl" /> },
    { name: "SQL", icon: <TbSql className="text-blue-500 text-3xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300 text-3xl" /> },
    { name: "Spark", icon: <SiApachespark className="text-orange-400 text-3xl" /> },
    { name: "Airflow", icon: <SiApacheairflow className="text-blue-400 text-3xl" /> },
    { name: "MUI", icon: <SiMui className="text-blue-500 text-3xl" /> },
    { name: "Linux", icon: <FaLinux className="text-yellow-500 text-3xl" /> },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-tr from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white px-4">
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

      {/* Layout container with flex for left and right side */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12 md:gap-24">
        {/* Left side content */}
        <div className="flex flex-col items-center md:items-start max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              transform: `translate(${mousePos.x * 0.01}px, ${mousePos.y * 0.01}px)`,
            }}
            className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 animate-shimmer bg-[length:200%_auto] drop-shadow-[0_0_20px_rgba(255,215,0,0.5)] text-center md:text-left"
          >
            SATYABRATA BEHERA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 max-w-2xl text-lg md:text-2xl text-gray-200 leading-relaxed"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-10 flex gap-6 justify-center md:justify-start"
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
        </div>

        {/* Right side circular skills ring on md+ */}
        <div
          className="relative w-[320px] h-[320px] hidden md:block rounded-full border border-yellow-400/30 shadow-[0_0_30px_rgba(255,215,0,0.3)] bg-gradient-to-tr from-yellow-900/10 via-yellow-800/10 to-yellow-900/10 overflow-visible"
          style={{ animation: "spin 20s linear infinite" }}
        >
          {skills.map((skill, i) => {
            const angle = (360 / skills.length) * i;
            const radius = 140;
            const center = 160;
            return (
              <motion.div
                key={skill.name}
                title={skill.name}
                className="absolute flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white cursor-default shadow-lg"
                style={{
                  top: center + radius * Math.sin((angle * Math.PI) / 180) - 40 / 2,
                  left: center + radius * Math.cos((angle * Math.PI) / 180) - 40 / 2,
                  transform: `rotate(${-angle}deg)`,
                }}
                whileHover={{ scale: 1.2, boxShadow: "0 0 15px rgba(255,215,0,0.8)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-5xl drop-shadow-lg">{skill.icon}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Horizontal infinite scroll skills on small screens */}
        <div className="md:hidden relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 3, // faster or slower here
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                title={skill.name}
                className="inline-flex min-w-[80px] p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex-col items-center justify-center shadow-lg cursor-default"
              >
                <div className="text-4xl">{skill.icon}</div>
                <span className="text-xs mt-1 font-semibold text-yellow-300">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Extra CSS */}
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
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </section>
  );
}
