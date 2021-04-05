import React, { MouseEvent } from 'react';
import { FlexContent } from '@d1.cx/components';

import { NotificationStyled } from './styled';

type Props = {
  text: string;
  open: boolean;
  handleClick: (event: MouseEvent) => void;
};
/**
 * @export
 * @component
 * @name Notification
 *
 * @description
 * Componente que exibe notificações necessárias no formulário
 */
export const Notification = ({ text, open, handleClick }: Props) => {
  return (
    <>
      {open && (
        <NotificationStyled data-testid="notification">
          <FlexContent spaceBetween>
            {text}
            <span onClick={handleClick}>x</span>
          </FlexContent>
        </NotificationStyled>
      )}
    </>
  );
};
