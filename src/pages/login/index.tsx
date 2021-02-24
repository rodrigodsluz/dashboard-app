import { useRouter } from 'next/router';
import { Input, PrimaryButton, LinkButton } from 'd1-components';
import { FormEvent, useState } from 'react';
import api from '../../services/api';
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

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    const userData = {
      Login: email,
      Password: password,
    };

    await api
      .post('/Login/Authenticate', userData)
      .then((response) => {
        localStorage.setItem('userToken', response.data.token);
        router.push('/home');
      })
      .catch(() => {
        alert('Email ou senha incorretos!');
      });
  };

  const handleResetPassword = (e: FormEvent) => {
    e.preventDefault();
    router.push('/resetPassword');
  };
  return (
    <Container>
      <Form action="">
        <Logo src="http://design.d1.cx/img/logotipo.png" />
        <Input
          placeholder="Login@Login.com"
          value={email}
          handleChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          placeholder="Digite sua senha"
          value={password}
          handleChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <PrimaryButton handleClick={handleLogin}>Entrar</PrimaryButton>

        <LinkButton secondary handleClick={handleResetPassword}>
          Esqueceu sua senha?
        </LinkButton>
      </Form>
    </Container>
  );
}

const getInitialProps = async (ctx) => ({});
