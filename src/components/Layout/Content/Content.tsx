import React from 'react';

import { ContentStyled } from './styled';

type Props = {
  children: React.ReactNode;
  full: boolean;
  shrink: boolean;
};

/**
 * @export
 * @component
 * @name Content
 *
 * @description
 * Reponsável por montar o componente Content
 */
export const Content = ({ full = false, shrink = false, children }: Props) => {
  return (
    <ContentStyled full={full} shrink={shrink}>
      {children}
    </ContentStyled>
  );
};
