import { Container, Title, Text, Paper } from '@mantine/core';
import PageWrapper from '../components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <Container size="sm">
        <Paper
          p="xl"
          shadow="lg"
          radius="md"
          withBorder
          style={{ backgroundColor: '#111', color: '#fff' }}
        >
          <Title order={2} align="center" mb="md">
            🎮 Bem-vindo ao Know Your Fan
          </Title>
          <Text align="center">
            Descubra seu perfil como fã dos jogos da FURIA e participe da experiência!
          </Text>
        </Paper>
      </Container>
    </PageWrapper>
  );
}
