// src/components/Education.jsx
import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Technology",
      institution: "Trident Academy Of Technology",
      year: "2024",
      details: "CGPA: 7.03 | Biju Patnaik University of Technology"
    },
    {
      degree: "Intermediate",
      institution: "Ramarani College Of Science & Technology",
      year: "2020",
      details: "Odisha State Board"
    },
    {
      degree: "Matriculation",
      institution: "N.A.C High School Soro",
      year: "2018",
      details: ""
    }
  ];

  return (
    <section
      id="education"
      className="py-20 px-6 bg-gradient-to-br from-[#1B263B] via-[#0D1B2A] to-[#415A77] text-white relative overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#FFD70022,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#00FFF722,_transparent_70%)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200"
        >
          Education
        </motion.h2>

        <div className="relative border-l-4 border-yellow-400/60 pl-8 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-6 top-2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-yellow-500/50"></span>

              <h3 className="text-2xl font-bold text-yellow-300">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution} | {edu.year}</p>
              {edu.details && (
                <p className="text-gray-200 mt-2">{edu.details}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
