// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Certifications",
    "Contact",
  ];

  return (
    <>
      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black z-40"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-[#0D1B2A]/90 via-[#1B263B]/90 to-[#0D1B2A]/90 backdrop-blur-lg shadow-xl border-b border-yellow-400/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl md:text-3xl font-extrabold tracking-widest bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-gradient-x"
          >
            Satyabrata Behera
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <li key={item} className="relative group">
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-gray-200 hover:text-yellow-400 font-semibold tracking-wide transition-colors duration-300"
                >
                  {item}
                </a>
                {/* Animated underline */}
                <span className="absolute left-1/2 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 transition-all duration-400 group-hover:w-full group-hover:left-0 rounded-full"></span>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-yellow-400 text-4xl md:hidden focus:outline-none shadow-yellow-400/60 shadow-md rounded-full p-1"
            whileHover={{ scale: 1.1, rotate: 5, textShadow: "0 0 8px #facc15" }}
            whileTap={{ scale: 0.9, rotate: -5 }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="fixed top-0 right-0 w-2/3 h-screen bg-gradient-to-b from-[#0D1B2A] to-[#1B263B] backdrop-blur-xl shadow-2xl md:hidden z-50"
            >
              <ul className="flex flex-col space-y-8 p-10 text-xl font-semibold text-yellow-300">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-yellow-500 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style jsx>{`
        /* Gradient animation for logo */
        @keyframes gradient-x {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 5s linear infinite;
        }
      `}</style>
    </>
  );
}
