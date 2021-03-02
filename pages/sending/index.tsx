import React from 'react';

import SendingScreen from '@screens/Sending';
import Layout from '@components/Layout';

/**
 * @export
 * @component
 * @name SendingScreen
 *
 * @description
 * Componente que representa a pagina de envio de comunicação.
 */
const Sending = (): JSX.Element => {
  return (
    <>
      <Layout.Wrapper>
        <SendingScreen />
      </Layout.Wrapper>
    </>
  );
};

export default Sending;
