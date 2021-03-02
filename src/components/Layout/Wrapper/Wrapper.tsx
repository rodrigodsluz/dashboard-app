import React from 'react';

import { WrapperStyled, BorderTopStyled } from './styled';

type Props = {
  children: React.ReactNode;
};

/**
 * @export
 * @component
 * @name Wrapper
 *
 * @description
 * Reponsável por montar o componente Wrapper
 */
export const Wrapper = ({ children }: Props) => {
  return (
    <WrapperStyled>
      <BorderTopStyled />
      {children}
    </WrapperStyled>
  );
};
