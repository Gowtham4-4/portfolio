import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center mt-10">
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://instagram.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram size={24} />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Made with ❤️, caffeine ☕, and way too many
        bugs 🐛.  
      </p>
      <p className="text-xs mt-1 text-pink-400">
        Follow me on Insta… I post memes when code breaks 😂
      </p>
    </footer>
  );
}

export default Footer;
