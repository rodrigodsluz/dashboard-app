import React from 'react';

import Logo from '@components/Logo';
import Template from '@screens/Login/components/Template';

import { HeaderLoginStyled } from './styled';

/**
 * @export
 * @component
 * @name Header
 *
 * @description
 * Componente header comum da tela de login
 */
export const Header = (): JSX.Element => {
  return (
    <Template.Header>
      <HeaderLoginStyled>
        <Logo />
      </HeaderLoginStyled>
    </Template.Header>
  );
};
