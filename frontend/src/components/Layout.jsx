import { Container } from '@mantine/core';

export default function Layout({ children }) {
  return (
    <main>
      <Container size="xl" py="xl">
        {children}
      </Container>
    </main>
  );
}
