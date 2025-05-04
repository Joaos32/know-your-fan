import { Link } from 'react-router-dom';
import { Container, Group } from '@mantine/core';
import logo from '../assets/furia-logo.jpg';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <Container size="lg" className="navbar-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo FURIA" className="logo-img" />
          <span className="logo-title">Know Your Fan</span>
        </Link>
        <Group spacing="xl" className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cadastro" className="nav-link">Cadastro</Link>
          <Link to="/resumo" className="nav-link">Resumo</Link>
          <Link to="/fas" className="nav-link">Fãs</Link>
        </Group>
      </Container>
    </header>
  );
}
