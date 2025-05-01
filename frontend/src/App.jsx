import {
  MantineProvider,
  AppShell,
  Box,
  Text,
  Button,
  Stack,
  createTheme,
  rem
} from '@mantine/core';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const theme = createTheme({
  primaryColor: 'dark',
  colors: {
    dark: ['#1a1a1a', '#141414', '#0f0f0f', '#0a0a0a', '#050505', '#000000'],
    furiaPurple: ['#f2e9ff', '#d3bfff', '#b396ff', '#8e6eff', '#6846ff', '#4320ff'],
  },
  fontFamily: 'Orbitron, sans-serif',
  headings: {
    fontFamily: 'Orbitron, sans-serif',
  },
  fontSizes: {
    md: rem(16),
    xl: rem(24),
  },
});

function Home() {
  return <Text size="xl">Bem-vindo ao Know Your Fan! 🌟</Text>;
}

function Perfil() {
  return <Text size="xl">Aqui está o seu perfil de fã.</Text>;
}

function Analise() {
  return <Text size="xl">Análise personalizada dos seus dados sociais.</Text>;
}

export default function App() {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Router>
        <AppShell
          padding="md"
          navbar={
            <Box p="md" bg="dark.6" style={{ height: '100%' }}>
              <Stack>
                <Button component={Link} to="/" variant="outline" color="furiaPurple.4">Home</Button>
                <Button component={Link} to="/perfil" variant="outline" color="furiaPurple.4">Perfil</Button>
                <Button component={Link} to="/analise" variant="outline" color="furiaPurple.4">Análise</Button>
              </Stack>
            </Box>
          }
          header={
            <Box p="md" bg="dark.7" style={{ display: 'flex', alignItems: 'center', height: 60 }}>
              <Text size="lg" fw={700} c="furiaPurple.3">Know Your Fan 🎮</Text>
            </Box>
          }
          styles={{
            main: {
              backgroundColor: '#0a0a0a',
              color: '#fff',
              fontFamily: 'Orbitron, sans-serif'
            }
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/analise" element={<Analise />} />
          </Routes>
        </AppShell>
      </Router>
    </MantineProvider>
  );
}
