// src/components/Experience.jsx
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Java Full Stack Developer Intern",
      company: "Jspider, Bengaluru",
      date: "Oct 2024 – Present",
      details: [
        "Developed full-stack apps with Java, Spring Boot, Kafka, and MySQL.",
        "Built responsive UIs with React.js and Tailwind CSS.",
        "Integrated secure REST APIs with JWT authentication."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white relative overflow-hidden"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#FFD70022,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#00FFF722,_transparent_70%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-4 border-yellow-400/60 pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-6 top-2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-500/50"></span>

              <h3 className="text-2xl font-bold text-yellow-300">{exp.role}</h3>
              <p className="text-gray-300">{exp.company} | {exp.date}</p>

              <ul className="list-disc ml-5 mt-3 space-y-2 text-gray-200">
                {exp.details.map((detail, i) => (
                  <li key={i} className="leading-relaxed">{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
