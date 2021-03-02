import React from 'react';

import WorkerScreen from '@screens/Worker';
import Layout from '@components/Layout';

/**
 * @export
 * @component
 * @name WorkerScreen
 *
 * @description
 * Componente que representa a pagina de envio de comunicação.
 */
const Worker = (): JSX.Element => {
  return (
    <>
      <Layout.Wrapper>
        <WorkerScreen />
      </Layout.Wrapper>
    </>
  );
};

export default Worker;
