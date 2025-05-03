import { Container, Group, Text, Image, Divider } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', color: '#fff' }}>
      {/* Header */}
      <header style={{ padding: '1rem 2rem', backgroundColor: '#000', borderBottom: '1px solid #222' }}>
        <Container size="xl" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Group>
            <Image src="/furia-logo.png" width={40} alt="Logo FURIA" />
            <Text size="lg" weight={700} color="white">Know Your Fan</Text>
          </Group>
          <Group spacing="md">
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
            <Link to="/form" style={{ color: '#fff', textDecoration: 'none' }}>Cadastro</Link>
            <Link to="/resumo" style={{ color: '#fff', textDecoration: 'none' }}>Resumo</Link>
            <Link to="/fans" style={{ color: '#fff', textDecoration: 'none' }}>Fãs</Link>
          </Group>
        </Container>
      </header>

      {/* Conteúdo */}
      <main>
        <Container size="xl" py="xl">
          {children}
        </Container>
      </main>

      {/* Footer */}
      <footer style={{ padding: '1rem', backgroundColor: '#111', borderTop: '1px solid #222', textAlign: 'center' }}>
        <Text size="sm" color="dimmed">© {new Date().getFullYear()} Know Your Fan - FURIA eSports Fan App</Text>
      </footer>
    </div>
  );
}
