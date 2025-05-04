import { Container, Text, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Navbar.css';

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', color: '#fff' }}>
      <Navbar />
      <main>
        <Container size="xl" py="xl">
          {children}
        </Container>
      </main>
      <footer
        style={{
          padding: '1rem',
          backgroundColor: '#111',
          borderTop: '2px solid #FFD700',
          textAlign: 'center',
        }}
      >
        <Group position="center" spacing={24} className="nav-links" mb="sm">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/form" className="nav-link">Cadastro</Link>
          <Link to="/resumo" className="nav-link">Resumo</Link>
          <Link to="/fans" className="nav-link">Fãs</Link>
        </Group>
        <Text size="sm" color="dimmed">
          © {new Date().getFullYear()} Know Your Fan - FURIA eSports Fan App
        </Text>
      </footer>
    </div>
  );
}
