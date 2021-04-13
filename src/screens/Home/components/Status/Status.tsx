import React from 'react';

import { Container, Indicator } from './style';


/**
 * @export
 * @component
 * @name Status
 *
 * @description
 * Responsavel por retonar o status formatado com um circulo colorido de acordo com o status.
 */


export const Status = ({ status }): JSX.Element => {
  return (
    <Container>
      <Indicator status={status} />
      {status}
    </Container>
  );
};

export default Status;
