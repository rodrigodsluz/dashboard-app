import React, { useCallback } from 'react';

import { redirect } from '@utils/redirect';
import { removeCookie } from '@utils/cookie';
import { LOGIN_ROUTE } from '@constants/Routes/';
import { LogoutTextStyled, LogoutWrapperStyled } from './styled';

/**
 * @export
 * @component
 * @name Logout
 *
 * @description
 * Componente Logout responsável por limpar
 * todos os dados do usuário.
 */
export const Logout = (): JSX.Element => {
  /**
   * @export
   * @function
   * @name handleLogout
   *
   * @description
   * Responsável por limpar o localstorage e cookie e
   * redirecionar para a página de login
   */
  const handleLogout = useCallback(() => {
    localStorage.clear();
    removeCookie('token');
    redirect(LOGIN_ROUTE);
  }, []);

  return (
    <LogoutWrapperStyled>
      <LogoutTextStyled onClick={handleLogout}>Sair</LogoutTextStyled>
    </LogoutWrapperStyled>
  );
};
