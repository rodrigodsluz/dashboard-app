import React from 'react';
import { HeaderStyled } from './styled';

type Props = {
  children: React.ReactNode;
};
/**
 * @export
 * @component
 * @name Header
 *
 * @description
 * Componente de alocação de divs relacionadas ao header
 */
export const Header = ({ children }: Props): JSX.Element => {
  return <HeaderStyled>{children}</HeaderStyled>;
};
