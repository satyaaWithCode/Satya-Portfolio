// src/components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white overflow-hidden"
    >
      {/* Decorative background glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto"
        >
          I’m an <span className="text-yellow-300 font-semibold">enthusiastic Java Full Stack Developer </span> 
           with a strong focus on backend development, eager to build scalable and secure applications.  
          Skilled in <span className="text-cyan-300 font-semibold">Java, Spring Boot, Kafka, React.js,Next.js and Tailwind CSS</span>,  
          I love crafting elegant solutions that blend performance and design.
        </motion.p>

        {/* Skills highlight cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 hover:bg-white/20 transition-transform duration-300">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Backend</h3>
            <p className="text-gray-200">Microservice, Spring Boot,Apache Kafka , spark , Airflow, Websocket REST APIs</p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 hover:bg-white/20 transition-transform duration-300">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Frontend</h3>
            <p className="text-gray-200">React.js, Tailwind CSS, Responsive UI , MUI , Next.js</p>
          </div>
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:scale-105 hover:bg-white/20 transition-transform duration-300">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">Tools</h3>
            <p className="text-gray-200">Git, Docker, Sql, Jenkins , Render , Netlifly,vercel</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
