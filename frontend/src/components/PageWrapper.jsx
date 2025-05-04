import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa';
import Navbar from './Navbar';
import ParticlesBackground from './ParticlesBackground';
import background from '../assets/background.png'; // ✅ sua imagem
import './Footer.css';

const MotionDiv = motion.div;

export default function PageWrapper({ children }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#ffffff' // ✅ Cor clara aplicada globalmente ao conteúdo
      }}
    >
      <ParticlesBackground />

      <Navbar />

      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        style={{ flex: 1, paddingBottom: '2rem' }}
      >
        {children}
      </MotionDiv>

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
    </div>
  );
}
