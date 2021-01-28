import Link from 'next/link';
import { Container, Logo, Form } from './style';
import { Input, PrimaryButton, LinkButton, OutlineButton } from 'd1-components';
import { useState } from 'react';

/**
 * @component
 * @name Login
 *
 * @description
 * Tela para o usuário poder logar com o acesso da d1
 */
export default function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        <Link href="/jvb">
          <PrimaryButton handleClick={() => {}}>Entrar</PrimaryButton>
        </Link>
        <LinkButton secondary handleClick={() => {}}>
          Esqueceu sua senha?
        </LinkButton>
      </Form>
    </Container>
  );
}

const getInitialProps = async ctx => {
  return {};
};
