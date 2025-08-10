// src/components/Contact.jsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#FFD70022,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#00FFF722,_transparent_70%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 mb-6"
        >
          Contact Me
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-300 mb-10"
        >
          Feel free to reach out for collaborations or just a friendly hello 👋
        </motion.p>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row md:justify-center gap-8 mb-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-md border border-yellow-400/30 shadow-lg hover:shadow-yellow-400/40 transition"
          >
            <FaEnvelope className="text-yellow-400 text-xl" />
            <a href="mailto:sbrata341@gmail.com" className="text-gray-200 hover:text-yellow-300">
              sbrata341@gmail.com
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-md border border-yellow-400/30 shadow-lg hover:shadow-yellow-400/40 transition"
          >
            <FaPhone className="text-yellow-400 text-xl" />
            <a href="tel:+917606949967" className="text-gray-200 hover:text-yellow-300">
              +91 7606949967
            </a>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/satyabrata-behera-2993012b2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full border border-yellow-400/30 shadow-lg hover:shadow-yellow-400/40 transition"
          >
            <FaLinkedin className="text-yellow-400 text-2xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/satyaaWithCode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full border border-yellow-400/30 shadow-lg hover:shadow-yellow-400/40 transition"
          >
            <FaGithub className="text-yellow-400 text-2xl" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
