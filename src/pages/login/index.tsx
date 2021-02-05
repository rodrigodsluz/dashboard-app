import Link from 'next/link';
import { useRouter } from 'next/router';
import { Input, PrimaryButton, LinkButton } from 'd1-components';
import { useState } from 'react';
import { Container, Logo, Form } from './style';

/**
 * @component
 * @name Login
 *
 * @description
 * Tela para o usuário poder logar com o acesso da d1
 */
export default function login() {
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
        <Input
          placeholder="email@email.com"
          value={email}
          handleChange={() => {}}
        />
        <Input
          placeholder="Digite sua senha"
          value={password}
          handleChange={() => {}}
        />

        <PrimaryButton handleClick={handleLogin}>Entrar</PrimaryButton>

        <LinkButton secondary handleClick={() => {}}>
          Esqueceu sua senha?
        </LinkButton>
      </Form>
    </Container>
  );
}

const getInitialProps = async ctx => ({});
