import React from "react";

export default function Navbar() {
  const links = ["home","about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center px-8 py-4 space-x-4">
      {links.map((link) => (
        <a
          key={link}
          href={`#${link}`}
          className="px-4 py-2 bg-black/30 rounded-md text-gray-300 hover:text-white hover:bg-black/50 transition font-semibold uppercase tracking-wide"
        >
          {link}
        </a>
      ))}
    </nav>
  );
}
