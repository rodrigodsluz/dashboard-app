import React from 'react';
import Head from 'next/head';

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
       <Head>
          <title>Suporte D1 - Home</title>
          <meta property="og:title" content="D1 - Home" key="title" />
        </Head>
      <Layout.Wrapper>
        <WorkerScreen />
      </Layout.Wrapper>
    </>
  );
};

export default Worker;
