import React from 'react';

import { Container, Indicator } from './style';

export const Status = ({ status }): JSX.Element => {
  return (
    <Container>
      <Indicator status={status} />
      {status}
    </Container>
  );
};

export default Status;
