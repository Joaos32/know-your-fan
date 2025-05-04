import { useEffect, useState } from 'react';
import {
  Container,
  Table,
  Title,
  Text,
  Loader,
  Paper,
} from '@mantine/core';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';

export default function FanList() {
  const [fans, setFans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/fan')
      .then((res) => res.json())
      .then((data) => {
        setFans(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar fãs:', error);
        setLoading(false);
      });
  }, []);

  return (
    <PageWrapper>
      <Container size="lg" py="xl">
        <Title order={2} align="center" mb="lg">
          📋 Lista de Fãs Cadastrados
        </Title>

        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Loader size="lg" variant="bars" />
          </div>
        ) : fans.length === 0 ? (
          <Text align="center">Nenhum fã encontrado.</Text>
        ) : (
          <Paper shadow="md" p="md" radius="md" withBorder>
            <Table striped highlightOnHover verticalSpacing="md" fontSize="sm">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Jogos</th>
                  <th>Instagram</th>
                  <th>Twitter</th>
                </tr>
              </thead>
              <tbody>
                {fans.map((fan, index) => (
                  <motion.tr
                    key={fan.cpf || index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td>{fan.nome}</td>
                    <td>{fan.cpf}</td>
                    <td>{Array.isArray(fan.jogosFavoritos) ? fan.jogosFavoritos.join(', ') : ''}</td>
                    <td>{fan.instagram}</td>
                    <td>{fan.twitter}</td>
                  </motion.tr>
                ))}
              </tbody>
            </Table>
          </Paper>
        )}
      </Container>
    </PageWrapper>
  );
}
