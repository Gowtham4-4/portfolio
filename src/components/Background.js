import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

function Background() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hue, setHue] = useState(200);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animate hue rotation
    const interval = setInterval(() => {
      setHue((prev) => (prev + 2) % 360);
    }, 40);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {/* --- Animated Gradient Background (Aurora effect) --- */}
      <div
        className="absolute inset-0 -z-20 animate-gradient"
        style={{
          background: `linear-gradient(120deg,
            hsl(${hue}, 100%, 12%) 0%,
            hsl(${(hue + 60) % 360}, 100%, 12%) 50%,
            hsl(${(hue + 120) % 360}, 100%, 12%) 100%)`,
          backgroundSize: "300% 300%",
          animation: "aurora 15s ease infinite",
        }}
      />

      {/* --- Particle Background --- */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: { value: 140, density: { enable: true, area: 800 } },
            color: { value: `hsl(${hue}, 100%, 60%)` },
            opacity: {
              value: 0.9,
              random: true,
              animation: { enable: true, speed: 2, minimumValue: 0.3 },
            },
            size: {
              value: { min: 2, max: 6 },
              random: true,
              animation: { enable: true, speed: 3, minimumValue: 1 },
            },
            move: { enable: true, speed: 2, outModes: { default: "bounce" } },
            links: {
              enable: true,
              distance: 150,
              color: `hsl(${hue}, 100%, 70%)`,
              opacity: 0.6,
              width: 1.5,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: { repulse: { distance: 120 }, push: { quantity: 5 } },
          },
        }}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* --- Cursor Neon Glow --- */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(
            circle at ${mousePos.x}px ${mousePos.y}px,
            hsl(${hue}, 100%, 70%) 0%,
            hsla(${hue}, 100%, 60%, 0.4) 20%,
            transparent 50%
          )`,
          filter: "blur(60px) brightness(1.5)",
          transition: "background 0.05s linear",
        }}
      />
    </div>
  );
}

export default Background;

