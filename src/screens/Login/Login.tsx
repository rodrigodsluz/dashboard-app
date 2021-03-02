import React from 'react';

import Header from '@screens/Login/components/Header';
import Body from '@screens/Login/components/Body';

/**
 * @export
 * @component
 * @name LoginScreen
 *
 * @description
 * Componente que contem os dados da tela de login.
 */
export const LoginScreen = (): JSX.Element => (
  <>
    <Header />
    <Body />
  </>
);
