import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";


import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [init, setInit] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle config
  const particlesOptions = useMemo(
    () => ({
      fullScreen: { enable: true, zIndex: -1 },
      background: { color: "transparent" },
      particles: {
        number: { value: 60 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.2 },
        size: { value: 3 },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          outModes: "bounce",
        },
        links: {
          enable: true,
          distance: 120,
          color: "#ffffff",
          opacity: 0.1,
          width: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "repulse" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100 },
          push: { quantity: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div
      className="relative text-white min-h-screen overflow-x-hidden 
      bg-gradient-to-r from-gray-900 via-black to-gray-900 
      bg-200% animate-gradientShift"
    >
      {/* Animated Particle Background */}
      {init && <Particles id="tsparticles" options={particlesOptions} />}

      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center md:text-left relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent animate-pulse">
              Gowtham
            </span>{" "}
            👋
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            CS Undergrad 💻 | Web Dev 🌐 | AI Enthusiast 🤖 <br />
            Turning ☕ into code, building apps that (hopefully) don’t break 😅.
          </p>
          <p className="text-pink-400 italic mb-6">
           🐒 “Evolving… slowly.”
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 bg-pink-600 rounded-lg text-white font-semibold hover:bg-pink-500 transition shadow-[0_0_15px_#ff2d75]"
            >
              Explore Projects 🚀
            </a>
            <a
              href="/Resume.pdf"
              download
              className="px-6 py-3 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-500 transition shadow-[0_0_15px_#6a5acd]"
            >
              Download Resume 📄
            </a>
          </div>
        </motion.div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="mt-10 md:mt-0 relative z-10"
        >
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl border-4 border-pink-500 shadow-[0_0_30px_#ff2d75] animate-none"
          />
        </motion.div>
      </section>

      {/* About + Education + Experience Section */}
      <section id="overview" className="py-20 px-6 relative z-10">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          About Me & Background
        </h2>

        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          {/* About */}
          <div className="flex-1 neon-card">
            <h3 className="text-xl font-semibold text-white mb-3">About Me</h3>
            <p className="text-gray-300 text-sm">
              I'm a Computer Science undergraduate passionate about building
              interactive web apps and leveraging technology to solve real-world
              problems. I thrive on challenges and enjoy turning creative ideas
              into real projects.
            </p>
          </div>

          {/* Education */}
          <div className="flex-1 neon-card">
            <h3 className="text-xl font-semibold text-white mb-3">Education</h3>
            <p className="text-gray-300 text-sm">
              <strong>B-TECH:</strong> Vaagdevi College of Engineering, Warangal
              | 2026 | CGPA: 8.51
            </p>
            <p className="text-gray-300 text-sm">
              <strong>Intermediate:</strong> Resonance Jr College, Khammam |
              2022 | 93%
            </p>
            <p className="text-gray-300 text-sm">
              <strong>SSC:</strong> Karunya Vidhya Bhavan, Khammam | 2020 | GPA:
              10
            </p>
          </div>

          {/* Experience */}
          <div className="flex-1 neon-card">
            <h3 className="text-xl font-semibold text-white mb-3">
              Experience
            </h3>
            <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
              <li>GEMA | Marketing Intern | Mar-May 2025</li>
              <li>AICTE & Shell India | Python Dev Intern | Mar-Apr 2025</li>
              <li>TechSaksham | Web Dev Intern | Feb-Mar 2025</li>
              <li>
                EY – Edunet Foundation | MERN Stack Intern | Sep 2024 – Jan 2025
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 px-6 relative z-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {[
            "JavaScript",
            "React",
            "Python",
            "Node Js",
            "Vue.js",
            "Express.js",
            "MongoDB",
            "SQL",
            
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="neon-card min-w-[150px] text-center"
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
        className="py-20 px-6 relative z-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Film Location Finder */}
          <motion.div className="neon-card flex flex-col justify-between min-h-[280px] p-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Film Location Finder
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                A web app using <strong>React.js, Express.js, MongoDB</strong> to
                help users find filming locations.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                <strong>Tech Stack:</strong> React.js | Express.js | MongoDB
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://cinespot4.vercel.app"
                target="_blank"
                className="px-4 py-2 bg-pink-600 rounded hover:bg-pink-500 transition shadow-[0_0_15px_#ff2d75]"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Gowtham4-4"
                target="_blank"
                className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500 transition shadow-[0_0_15px_#6a5acd]"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Resume Ranker */}
          <motion.div className="neon-card flex flex-col justify-between min-h-[280px] p-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Resume Ranker
              </h3>
              <p className="text-gray-400 text-sm mb-2">
                Built using <strong>Streamlit</strong>. This app ranks and screens
                resumes automatically, helping recruiters identify top candidates
                efficiently.
              </p>
              <p className="text-gray-400 text-sm mb-4">
                <strong>Tech Stack:</strong> Streamlit | Python
              </p>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://resumeranking-4.streamlit.app"
                target="_blank"
                className="px-4 py-2 bg-pink-600 rounded hover:bg-pink-500 transition shadow-[0_0_15px_#ff2d75]"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Gowtham4-4"
                target="_blank"
                className="px-4 py-2 bg-indigo-600 rounded hover:bg-indigo-500 transition shadow-[0_0_15px_#6a5acd]"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-6 text-center relative z-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white">Connect With Me ✨</h2>
        <p className="mt-4 text-gray-400">
          Let’s link up! (No spam, only vibes 😎)
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6 max-w-3xl mx-auto text-gray-300">
          <a
            href="https://github.com/Gowtham4-4"
            target="_blank"
            className="neon-card p-6 flex-1"
          >
            GitHub 🐙
          </a>
          <a
            href="https://linkedin.com/in/gowtham-perumallapalli/"
            target="_blank"
            className="neon-card p-6 flex-1"
          >
            LinkedIn 💼
          </a>
          <a
            href="https://instagram.com/YOUR_INSTAGRAM"
            target="_blank"
            className="neon-card p-6 flex-1"
          >
            Instagram 📸 <br />
            <span className="text-pink-400 italic text-sm">
              “Just here for the memes 😏”
            </span>
          </a>
        </div>
      </motion.section>

    </div>
  );
}

export default App;


