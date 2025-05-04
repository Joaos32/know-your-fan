import { Container, Title, Paper, Text, Divider, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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
    if (!element) return;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resumo_fan.pdf');
  };

  return (
    <Container size="sm" py="xl" id="resumo-fan">
      <Paper
        p="xl"
        shadow="md"
        radius="lg"
        withBorder
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          color: '#fff',
        }}
      >
        <Title order={2} align="center" mb="md">🧾 Resumo do Perfil do Fã</Title>
        <Divider my="sm" />
        <Text><strong>Nome:</strong> {dadosFinais.nome}</Text>
        <Text><strong>CPF:</strong> {dadosFinais.cpf}</Text>
        <Text><strong>Endereço:</strong> {dadosFinais.endereco}</Text>

        <Divider my="sm" label="Interesses" />
        <Text><strong>Jogos:</strong> {dadosFinais.jogosFavoritos.join(', ')}</Text>
        <Text><strong>Atividades/Eventos:</strong> {dadosFinais.eventos}</Text>

        <Divider my="sm" label="Documento" />
        {dadosFinais.comprovante && (
          <div style={{ marginTop: 12 }}>
            <strong>Comprovante:</strong>{' '}
            {/\.(jpe?g|png|gif|bmp)$/i.test(dadosFinais.comprovante) ? (
              <img
                src={`http://localhost:8000/uploads/${dadosFinais.comprovante}`}
                alt="Comprovante"
                style={{
                  maxWidth: '100%',
                  maxHeight: 300,
                  borderRadius: 8,
                  marginTop: 8,
                  border: '1px solid #ddd',
                }}
              />
            ) : /\.(pdf)$/i.test(dadosFinais.comprovante) ? (
              <a
                href={`http://localhost:8000/uploads/${dadosFinais.comprovante}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#4dabf7', textDecoration: 'underline' }}
              >
                Visualizar PDF
              </a>
            ) : (
              <span>{dadosFinais.comprovante}</span>
            )}
          </div>
        )}

        <Divider my="sm" label="Redes Sociais" />
        <Text><strong>Instagram:</strong> {dadosFinais.instagram}</Text>
        <Text><strong>Twitter:</strong> {dadosFinais.twitter}</Text>
        <Text><strong>Perfil eSports:</strong> {dadosFinais.linkPerfil}</Text>

        <Button fullWidth mt="xl" color="dark" variant="filled" onClick={voltar}>
          Voltar à página inicial
        </Button>
        <Button variant="light" color="violet" mt="sm" fullWidth onClick={gerarPDF}>
          Baixar PDF
        </Button>
      </Paper>
    </Container>
  );
}
