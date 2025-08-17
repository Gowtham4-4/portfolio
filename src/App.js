import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";


function App() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
  <Navbar />
      {/* Hero Section */}
<section id="home" className="relative h-screen w-full flex items-center px-12">
  {/* Background Video */}
  <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/hero-bg.mp4" type="video/mp4" />
    </video>
  </div>

  {/* Adjusted Transparent Overlay */}
  <div className="absolute top-32 left-1/4 w-2/3 h-2/3 bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl p-12 flex flex-col justify-center">
    {/* Hero Text inside overlay */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="max-w-2xl"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent">
          Gowtham
        </span>{" "}
        👋
      </h2>
      <p className="text-lg text-gray-300">
        Computer Science Undergrad | Web Developer | AI Enthusiast
      </p>
    </motion.div>
  </div>
{/* Profile Pic aligned to left of overlay */}
<motion.img
  src="/profile.jpg"
  alt="Gowtham"
  className="absolute top-1/2 left-16 transform -translate-y-1/2 w-52 h-52 rounded-full border-4 border-white/20 shadow-lg"
/>


</section>

{/* About Section */}
<motion.section
  id="about"
  className="py-20 px-6 text-center mt-12 relative z-10"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 1 }}
>
  <h2 className="text-3xl font-bold text-white">About Me</h2>
  <div className="mt-8 max-w-3xl mx-auto backdrop-blur-lg bg-white/10 to-black/70 p-8 rounded-t-3xl border border-white/10">
    <p className="text-gray-300 text-lg">
      Hi! I'm Gowtham, a Computer Science undergrad passionate about building 
      interactive web apps and exploring the world of AI. I love turning creative 
      ideas into real projects, learning new technologies, and sharing my knowledge 
      with others. When I'm not coding, you can find me gaming or editing videos. 
    </p>
  </div>
</motion.section>


      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 px-6 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white">Skills</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {["JavaScript", "React", "Python", "Tailwind CSS"].map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg shadow-md bg-gradient-to-br from-black/40 to-black/70 border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg font-semibold text-gray-300">{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-6 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2].map((proj) => (
            <motion.div
              key={proj}
              className="p-6 rounded-lg shadow-lg bg-gradient-to-br from-black/40 to-black/70 border border-white/10"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-white">
                Project {proj}
              </h3>
              <p className="mt-2 text-gray-400">
                Description of project {proj} goes here.
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
<motion.section
  id="contact"
  className="py-20 px-6 text-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <h2 className="text-3xl font-bold text-white">Connect with me</h2>
  <p className="mt-4 text-gray-400">Follow or message me on social media 🚀</p>

  <div className="mt-8 flex justify-center space-x-8 text-gray-300">
    {/* GitHub */}
    <a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition transform hover:scale-110"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.805 1.305 3.49.998.108-.776.418-1.305.76-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013-.405c1.02.005 2.045.138 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.813 1.102.813 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.698.825.58C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition transform hover:scale-110"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75S5.534 4.25 6.5 4.25s1.75.784 1.75 1.75S7.466 7.75 6.5 7.75zm13.5 11.25h-3v-5.5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5.5h-3v-10h3v1.354c.779-1.021 2.206-1.354 3.5-1.354 2.485 0 4.5 2.015 4.5 4.5v5.5z"/>
      </svg>
    </a>

    {/* Instagram */}
    <a
      href="https://instagram.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition transform hover:scale-110"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.338 3.608 1.313.975.975 1.251 2.242 1.313 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.338 2.633-1.313 3.608-.975.975-2.242 1.251-3.608 1.313-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.338-3.608-1.313-.975-.975-1.251-2.242-1.313-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.338-2.633 1.313-3.608.975-.975 2.242-1.251 3.608-1.313 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.737 0 8.332.012 7.052.072 5.773.132 4.642.364 3.678 1.328 2.713 2.292 2.482 3.423 2.422 4.702 2.362 5.982 2.35 6.387 2.35 12s.012 6.018.072 7.298c.06 1.279.292 2.41 1.256 3.374.964.964 2.095 1.196 3.374 1.256 1.28.06 1.685.072 7.298.072s6.018-.012 7.298-.072c1.279-.06 2.41-.292 3.374-1.256.964-.964 1.196-2.095 1.256-3.374.06-1.28.072-1.685.072-7.298s-.012-6.018-.072-7.298c-.06-1.279-.292-2.41-1.256-3.374C19.41.364 18.279.132 17 .072 15.718.012 15.313 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
      </svg>
    </a>
  </div>
</motion.section>


      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-white/10">
        © {new Date().getFullYear()} Gowtham. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
