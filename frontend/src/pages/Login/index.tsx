import { Container, Logo } from './style';
import { Input, PrimaryButton, LinkButton, OutlineButton } from 'd1-components';
import { useState } from 'react';

/**
 * @component
 * @name Login
 *
 * @description
 * Tela para o usuário poder logar com o acesso da d1
 */
export const Login = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container>
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
      <PrimaryButton handleClick={() => {}}>Entrar</PrimaryButton>
    </Container>
  );
};
