// src/components/Certifications.jsx
import { motion } from "framer-motion";
import portImg from "../assets/port.png"; // <-- make sure port.png is in src/assets

export default function Certifications() {
  const certifications = [
    {
      title: "Full-Stack Development",
      issuer: "Udemy",
      date: "March 2024",
      image: portImg,
      link: "#"
    },
    {
      title: "Java Spring Boot Mastery",
      issuer: "Coursera",
      date: "Jan 2024",
      image: portImg,
      link: "#"
    },
    {
      title: "React & Tailwind Advanced",
      issuer: "freeCodeCamp",
      date: "Dec 2023",
      image: portImg,
      link: "#"
    }
  ];

  return (
    <section
      id="certifications"
      className="relative py-20 px-6 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
        >
          Certifications
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 hover:shadow-yellow-500/20 transition-all duration-300"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={cert.title}
                className="rounded-lg mb-4 w-full h-40 object-cover border border-yellow-400/20"
              />

              {/* Title */}
              <h3 className="text-xl font-bold text-yellow-300 mb-1">{cert.title}</h3>
              <p className="text-gray-300 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-400 text-xs mb-4">{cert.date}</p>

              {/* Link */}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
