import React, { ChangeEvent } from 'react';
import InputMask from 'react-input-mask';

import { ErrorStyled } from './styled';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
};

/**
 * @export
 * @component
 * @function
 * @name InputMobile
 *
 * @description
 * Responsável por conter o componente InputMobile
 */

export const InputMobile = ({
  handleChange,
  value,
  error,
  ...rest
}: InputProps) => {
  return (
    <>
      <InputMask
        mask="+99 (99) 99999-9999"
        value={value}
        onChange={handleChange}
        {...rest}
        className={error ? 'input-mask error' : 'input-mask'}
      />
      {error && <ErrorStyled>x Preenchimento inválido.</ErrorStyled>}
    </>
  );
};
