import { Link } from 'react-router-dom';
import { Container, Group } from '@mantine/core';
import logo from '../assets/furia-logo.jpg';
import './Navbar.css';

export default function Navbar() {
  return (
    <header
      style={{
        backgroundColor: '#000',
        borderBottom: '2px solid #FFD700',
        padding: '0.75rem 0',
      }}
    >
      <Container
        size="lg"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {/* Logo e Título juntos e clicáveis */}
        <Link to="/" className="logo-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <img src={logo} alt="Logo FURIA" style={{ height: 40, borderRadius: 8 }} />
          <span className="logo-title" style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.2rem' }}>
            Know Your Fan
          </span>
        </Link>

        {/* Navegação */}
        <Group spacing="lg">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cadastro" className="nav-link">Cadastro</Link>
          <Link to="/resumo" className="nav-link">Resumo</Link>
          <Link to="/fas" className="nav-link">Fãs</Link>
        </Group>
      </Container>
    </header>
  );
}
