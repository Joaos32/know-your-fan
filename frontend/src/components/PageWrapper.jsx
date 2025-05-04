import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa';
import Navbar from './Navbar'; // ✅ Reintegrado aqui
import ParticlesBackground from './ParticlesBackground';
import './Footer.css';

export default function PageWrapper({ children }) {
  return (
    <>
      <ParticlesBackground />

      <Navbar /> {/* ✅ Navbar única e centralizada na aplicação */}

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        style={{ minHeight: 'calc(100vh - 140px)' }}
      >
        {children}
      </motion.main>

      <footer className="footer">
        <div className="footer-text">
          Know Your Fan © {new Date().getFullYear()} — Feito com ❤️ por João Vitor
        </div>
        <div className="footer-icons">
          <a href="https://www.instagram.com/furiagg" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/furia" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://furia.gg" target="_blank" rel="noopener noreferrer">
            <FaGlobe />
          </a>
        </div>
      </footer>
    </>
  );
}
