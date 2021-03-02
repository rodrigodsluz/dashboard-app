import React from 'react';
import { ContentStyled } from './styled';

type Props = {
  children: React.ReactNode;
};

/**
 * @export
 * @component
 * @name Content
 *
 * @description
 * Componente de alocação de divs relacionadas ao conteúdo
 */
export const Content = ({ children }: Props): JSX.Element => (
  <ContentStyled>{children}</ContentStyled>
);
