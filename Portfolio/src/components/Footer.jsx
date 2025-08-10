// src/components/Footer.jsx
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative py-8 text-center text-white bg-gradient-to-tr from-[#0D1B2A] via-[#1B263B] to-[#415A77] overflow-hidden"
    >
      {/* Subtle glowing pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#FFD70033,_transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#00FFF733,_transparent_60%)] pointer-events-none" />

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mb-4 relative z-10">
        <a
          href="https://www.linkedin.com/in/satyabrata-behera-2993012b2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 text-2xl hover:text-yellow-400 transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/satyaaWithCode"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 text-2xl hover:text-yellow-400 transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:sbrata341@gmail.com"
          className="text-yellow-300 text-2xl hover:text-yellow-400 transition-transform transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Footer Text */}
      <p className="relative z-10 text-gray-200 text-sm">
        © {new Date().getFullYear()} Satyabrata Behera. Crafted with ❤️ and endless cups of ☕.
      </p>
    </motion.footer>
  );
}
