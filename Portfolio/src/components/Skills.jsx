

// import { motion } from "framer-motion";
// import { FaJava, FaReact, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
// import {
//   SiSpringboot,
//   SiSpringsecurity,
//   SiApachekafka,
//   SiJavascript,
//   SiMysql,
//   SiApacheairflow,
//   SiApachespark,
//   SiMui
// } from "react-icons/si";
// import { TbSql } from "react-icons/tb";
// import { BiNetworkChart } from "react-icons/bi";

// // Animation Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15 // delay between each card
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.8 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { type: "spring", stiffness: 80, damping: 10 }
//   }
// };

// export default function Skills() {
//   const skills = [
//     { name: "Core Java", icon: <FaJava className="text-red-500 text-3xl" /> },
//     { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-3xl" /> },
//     { name: "React.js", icon: <FaReact className="text-blue-400 text-3xl" /> },
//     { name: "Tailwind CSS", icon: <SiMui className="text-cyan-400 text-3xl" /> },
//     { name: "Spring Boot", icon: <SiSpringboot className="text-green-500 text-3xl" /> },
//     { name: "Spring Security", icon: <SiSpringsecurity className="text-green-700 text-3xl" /> },
//     { name: "Microservices", icon: <BiNetworkChart className="text-purple-400 text-3xl" /> },
//     { name: "Kafka", icon: <SiApachekafka className="text-black text-3xl" /> },
//     { name: "WebSocket", icon: <BiNetworkChart className="text-pink-400 text-3xl" /> },
//     { name: "SQL", icon: <TbSql className="text-blue-500 text-3xl" /> },
//     { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
//     { name: "GitHub", icon: <FaGithub className="text-gray-300 text-3xl" /> },
//     { name: "Spark", icon: <SiApachespark className="text-orange-400 text-3xl" /> },
//     { name: "Airflow", icon: <SiApacheairflow className="text-blue-400 text-3xl" /> },
//     { name: "MUI", icon: <SiMui className="text-blue-500 text-3xl" /> },
//     { name: "Linux", icon: <FaLinux className="text-yellow-500 text-3xl" /> }
//   ];

//   return (
//     <section
//       id="skills"
//       className="relative py-20 px-6 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white overflow-hidden"
//     >
//       <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

//       <div className="relative max-w-6xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
//         >
//           Skills
//         </motion.h2>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
//         >
//           {skills.map((skill) => (
//             <motion.div
//               key={skill.name}
//               variants={itemVariants}
//               className="p-5 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20
//                          hover:scale-110 hover:bg-white/20 transition-all duration-300
//                          flex flex-col justify-center items-center gap-2"
//             >
//               {skill.icon}
//               <span className="text-lg font-semibold text-yellow-300">{skill.name}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// src/components/Skills.jsx
import { motion } from "framer-motion";
import { FaJava, FaReact, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import {
  SiSpringboot,
  SiSpringsecurity,
  SiApachekafka,
  SiJavascript,
  SiMysql,
  SiApacheairflow,
  SiApachespark,
  SiMui
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { BiNetworkChart } from "react-icons/bi";

export default function Skills() {
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
    { name: "Linux", icon: <FaLinux className="text-yellow-500 text-3xl" /> }
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-6 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
          Skills
        </h2>

        {/* Marquee Effect */}
        <div className="overflow-hidden relative group">
          <motion.div
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 15
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="min-w-[180px] p-5 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20
                flex flex-col justify-center items-center gap-2 hover:scale-110 transition-all duration-300"
              >
                {skill.icon}
                <span className="text-lg font-semibold text-yellow-300">{skill.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
