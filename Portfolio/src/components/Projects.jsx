// // src/components/Projects.jsx
// import { motion } from "framer-motion";

// export default function Projects() {
//   const projects = [
//     {
//       title: "PG Management System",
//       description:
//         "A web-based platform for PG owners to manage student records digitally with real-time updates using WebSocket and Kafka.",
//       tech: ["Spring Boot", "React.js", "Tailwind CSS", "MySQL", "Kafka", "JWT"],
//       link: "https://satyaa-pg.netlify.app/"
//     },
//     {
//       title: "Learning Management System (Ongoing)",
//       description:
//         "A scalable platform for purchasing and streaming courses online with HLS, Razorpay, and real-time notifications.",
//       tech: ["Spring Boot", "React.js", "Tailwind CSS", "Kafka", "HLS.js"],
//       link: "https://satyaa-lms-app.netlify.app/"
//     },
 
//   ];

//   return (
//     <section
//       id="projects"
//       className="relative py-20 px-6 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white overflow-hidden"
//     >
//       {/* Glow accents */}
//       <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

//       <div className="relative max-w-6xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
//         >
//           Projects
//         </motion.h2>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.6 }}
//               whileHover={{ scale: 1.05 }}
//               className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 hover:shadow-yellow-500/20 transition-all duration-300 text-left"
//             >
//               <h3 className="text-2xl font-bold mb-3 text-yellow-300">{project.title}</h3>
//               <p className="text-gray-200 mb-4">{project.description}</p>
              
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="px-3 py-1 text-sm rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-300/30"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>

//               {/* Live Link Button */}
//               {project.link && (
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
//                 >
//                   🔗 Live Demo
//                 </a>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }










// src/components/Projects.jsx
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "PG Management System",
      description:
        "A web-based platform for PG owners to manage student records digitally with real-time updates using WebSocket and Kafka.",
      tech: ["Spring Boot", "React.js", "Tailwind CSS", "MySQL", "Kafka", "JWT"],
      link: "https://satyaa-pg.netlify.app/",
    },
    {
      title: "Learning Management System (Ongoing)",
      description:
        "A scalable platform for purchasing and streaming courses online with HLS, Razorpay, and real-time notifications.",
      tech: ["Spring Boot", "React.js", "Tailwind CSS", "Kafka", "HLS.js"],
      link: "https://satyaa-lms-app.netlify.app/",
    },
    {
      title: "Recipe Finder App",
      description:
        "A modern recipe discovery app to search and explore thousands of recipes with smooth animations and category filters.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion", "API Integration"],
      link: "https://recipe-chi-five.vercel.app/",
    },
    {
      title: "Earthquake Tracker",
      description:
        "Real-time earthquake tracker app using live seismic data APIs with an interactive map and alert features.",
      tech: ["React.js", "Leaflet.js", "Tailwind CSS", "GeoJSON API"],
      link: "https://earthquake-blue.vercel.app/",
    },
    {
      title: "Book Finder App",
      description:
        "A clean and elegant app for searching and viewing books with a detailed preview of each book using Google Books API.",
      tech: ["React.js", "Tailwind CSS", "Google Books API"],
      link: "https://bookfinder-iota-silk.vercel.app/",
    },
    {
      title: "Weather Forecast App",
      description:
        "A sleek weather app showing current weather, temperature trends, and forecasts for any city worldwide.",
      tech: ["React.js", "Tailwind CSS", "OpenWeather API"],
      link: "https://weather-dun-seven.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white overflow-hidden"
    >
      {/* Glow accents */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12 bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 hover:shadow-yellow-500/20 transition-all duration-300 text-left"
            >
              <h3 className="text-2xl font-bold mb-3 text-yellow-300">{project.title}</h3>
              <p className="text-gray-200 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-300/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
                >
                  🔗 Live Demo
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
