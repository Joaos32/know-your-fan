import {
  Stepper,
  Group,
  TextInput,
  Checkbox,
  FileInput,
  Container,
  Textarea,
  Text,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import AnimatedButton from '../components/AnimatedButton';
import { showNotification } from '@mantine/notifications';
import IMask from 'imask';

export default function StepperForm() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const cpfRef = useRef(null);

  const form = useForm({
    initialValues: {
      nome: '',
      cpf: '',
      endereco: '',
      jogosFavoritos: [],
      eventos: '',
      comprovante: null,
      instagram: '',
      twitter: '',
      linkPerfil: '',
    },
    validate: {
      cpf: (value) =>
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value) ? null : 'CPF inválido',
    },
  });

  useEffect(() => {
    if (cpfRef.current) {
      const mask = IMask(cpfRef.current, {
        mask: '000.000.000-00',
      });

      mask.on('accept', () => {
        form.setFieldValue('cpf', mask.value);
      });

      return () => mask.destroy();
    }
  }, []);

  const nextStep = () => setActive((current) => (current < 4 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const submitForm = () => {
    if (!form.isValid()) {
      showNotification({
        title: 'Erro no formulário',
        message: 'Por favor, preencha todos os campos obrigatórios antes de continuar.',
        color: 'red',
        autoClose: 4000,
      });
      return;
    }

    localStorage.setItem('dadosFan', JSON.stringify(form.values));

    showNotification({
      title: 'Sucesso!',
      message: 'Seu perfil de fã foi salvo com sucesso 🎉',
      color: 'green',
      autoClose: 3000,
    });

    navigate('/resumo');
  };

  return (
    <PageWrapper>
      <Container size="sm" py="xl">
        <form onSubmit={form.onSubmit(submitForm)}>
          <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step label="Dados" description="Informações básicas">
              <TextInput label="Nome completo" required {...form.getInputProps('nome')} />
              <TextInput
                label="CPF"
                required
                inputRef={cpfRef}
                value={form.values.cpf}
                error={form.errors.cpf}
              />
              <TextInput label="Endereço" required {...form.getInputProps('endereco')} />
            </Stepper.Step>

            <Stepper.Step label="Interesses" description="Perfil de fã">
              <Checkbox.Group
                label="Quais jogos você acompanha?"
                {...form.getInputProps('jogosFavoritos')}
              >
                <Checkbox value="CS:GO" label="CS:GO" />
                <Checkbox value="Valorant" label="Valorant" />
                <Checkbox value="LoL" label="League of Legends" />
                <Checkbox value="FIFA" label="FIFA" />
              </Checkbox.Group>
              <Textarea
                label="Eventos que participou ou produtos que comprou no último ano"
                {...form.getInputProps('eventos')}
              />
            </Stepper.Step>

            <Stepper.Step label="Documento" description="Comprovante de identidade">
              <FileInput
                label="Upload de RG ou CNH"
                placeholder="Arraste o arquivo ou clique"
                required
                value={form.values.comprovante}
                onChange={(file) => form.setFieldValue('comprovante', file)}
              />
              {form.values.comprovante && (
                <Text size="sm" mt="xs">
                  Arquivo selecionado: {form.values.comprovante.name}
                </Text>
              )}
            </Stepper.Step>

            <Stepper.Step label="Social" description="Links e perfis">
              <TextInput label="Instagram" placeholder="@seuperfil" {...form.getInputProps('instagram')} />
              <TextInput label="Twitter" placeholder="@seuperfil" {...form.getInputProps('twitter')} />
              <TextInput
                label="Link de perfil em site de eSports"
                placeholder="https://..."
                {...form.getInputProps('linkPerfil')}
              />
            </Stepper.Step>

            <Stepper.Completed>
              <p>Revise seus dados e clique em "Enviar".</p>
              <pre>{JSON.stringify(form.values, null, 2)}</pre>
            </Stepper.Completed>
          </Stepper>

          <Group position="center" mt="xl">
            {active > 0 && (
              <AnimatedButton variant="default" onClick={prevStep}>
                Voltar
              </AnimatedButton>
            )}
            {active < 4 ? (
              <AnimatedButton onClick={nextStep}>
                Próximo
              </AnimatedButton>
            ) : (
              <AnimatedButton type="submit">
                Enviar
              </AnimatedButton>
            )}
          </Group>
        </form>
      </Container>
    </PageWrapper>
  );
}
