import Link from 'next/link';
import { useRouter } from 'next/router';
import { Input, PrimaryButton, Typography, Spacing } from 'd1-components';
import { useState } from 'react';
import { Container, Logo, Form } from './style';

/**
 * @component
 * @name Login
 *
 * @description
 * Tela para o usuário poder logar com o acesso da d1
 */
export default function ResetPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();
    router.push('/home');
  };
  return (
    <Container>
      <Form action="">
        <Logo src="http://design.d1.cx/img/logotipo.png" />
        <Typography htmlTag="p" fontSize="28px">
          Recuperar senha
        </Typography>
        <Spacing vertical="10px" />
        <Input
          placeholder="email@email.com"
          value={email}
          handleChange={() => {}}
        />

        <PrimaryButton handleClick={handleLogin}>Entrar</PrimaryButton>
      </Form>
    </Container>
  );
}

const getInitialProps = async ctx => ({});
