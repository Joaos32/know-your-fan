import { Container, Title, Text, Paper, Image, Group } from '@mantine/core';
import { FaInstagram, FaTwitter, FaGlobe } from 'react-icons/fa';
import PageWrapper from '../components/PageWrapper';
import background from '../assets/background.png';
import bannerFan from '../assets/banner-fan.jpg';
import furiaLogo from '../assets/furia-logo.jpg';

export default function Home() {
  return (
    <PageWrapper>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px 20px',
        }}
      >
        <Container size="md">
          <Paper
            p="xl"
            shadow="xl"
            radius="lg"
            withBorder
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <Image
              src={furiaLogo}
              alt="Logo da FURIA"
              height={100}
              width={100}
              fit="contain"
              mx="auto"
              radius="md"
              mb="md"
            />

            <Title order={2} mb="sm">
              🎮 Bem-vindo ao Know Your Fan
            </Title>

            <Text size="md">
              Descubra seu perfil como fã dos jogos da FURIA e participe da experiência!
            </Text>

            <Image
              src={bannerFan}
              alt="Banner Know Your Fan"
              radius="md"
              mt="lg"
              height={200}
              style={{ objectFit: 'cover', width: '100%' }}
            />

            <Group position="center" spacing="xl" mt="xl">
              <a
                href="https://www.instagram.com/furia"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com/furia"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <FaTwitter />
              </a>
              <a
                href="https://furia.gg"
                target="_blank"
                rel="noopener noreferrer"
                style={iconStyle}
              >
                <FaGlobe />
              </a>
            </Group>
          </Paper>
        </Container>
      </div>
    </PageWrapper>
  );
}

const iconStyle = {
  color: '#FFD700',
  fontSize: '1.8rem',
  transition: 'transform 0.3s ease',
  display: 'inline-block',
  margin: '0 8px',
  cursor: 'pointer',
};

const style = document.createElement('style');
style.innerHTML = `
  a:hover svg {
    transform: scale(1.2);
  }
`;
document.head.appendChild(style);
