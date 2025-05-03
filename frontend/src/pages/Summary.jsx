import { Container, Title, Paper, Text, Divider, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import PageWrapper from '../components/PageWrapper';

export default function Summary() {
  const navigate = useNavigate();

  const dadosFinais = JSON.parse(localStorage.getItem('dadosFan')) || {
    nome: 'João Vitor',
    cpf: '000.000.000-00',
    endereco: 'Rua dos Fãs, 123',
    jogosFavoritos: ['CS:GO', 'LoL'],
    eventos: 'Participou do IEM Rio 2024 e comprou 2 camisetas da FURIA.',
    comprovante: 'RG_digital.pdf',
    instagram: '@joaovitor',
    twitter: '@joaoFURIA',
    linkPerfil: 'https://furia.gg/fan/joaovitor',
  };

  const voltar = () => navigate('/');

  const gerarPDF = async () => {
    const element = document.getElementById('resumo-fan');
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resumo_fan.pdf');
  };

  return (
    <PageWrapper>
      <Container size="sm" py="xl" id="resumo-fan">
        <Paper p="xl" shadow="md" radius="lg" withBorder>
          <Title order={2} align="center" mb="md">🧾 Resumo do Perfil do Fã</Title>
          <Divider my="sm" />
          <Text><strong>Nome:</strong> {dadosFinais.nome}</Text>
          <Text><strong>CPF:</strong> {dadosFinais.cpf}</Text>
          <Text><strong>Endereço:</strong> {dadosFinais.endereco}</Text>
          <Divider my="sm" label="Interesses" />
          <Text><strong>Jogos:</strong> {dadosFinais.jogosFavoritos.join(', ')}</Text>
          <Text><strong>Atividades/Eventos:</strong> {dadosFinais.eventos}</Text>
          <Divider my="sm" label="Documento" />
          <Text><strong>Comprovante:</strong> {dadosFinais.comprovante}</Text>
          <Divider my="sm" label="Redes Sociais" />
          <Text><strong>Instagram:</strong> {dadosFinais.instagram}</Text>
          <Text><strong>Twitter:</strong> {dadosFinais.twitter}</Text>
          <Text><strong>Perfil eSports:</strong> {dadosFinais.linkPerfil}</Text>
          <Button fullWidth mt="xl" onClick={voltar}>Voltar à página inicial</Button>
          <Button variant="light" color="violet" mt="sm" fullWidth onClick={gerarPDF}>Baixar PDF</Button>
        </Paper>
      </Container>
    </PageWrapper>
  );
}
