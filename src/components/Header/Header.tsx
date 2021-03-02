import React from 'react';
import Logo from '@components/Logo';
import Logout from '@components/Logout';

import { HeaderStyled } from './styled';

/**
 * @export
 * @component
 * @name Header
 *
 * @description
 * Componente header gerado na tela do formulário
 */
export const Header = () => {
  return (
    <HeaderStyled>
      <Logout />
      <Logo />
    </HeaderStyled>
  );
};
