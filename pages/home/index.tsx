import React from 'react';
import Head from 'next/head';

import Layout from '@components/Layout';
import HomeScreen from '@screens/Home';

/**
 * @export
 * @component
 * @name Home
 *
 * @description
 * Responsável por conter a pagina de escolha de canais.
 */
const Home = (): JSX.Element => {
  return (
    <>
      <Layout.Wrapper>
        <Head>
          <title>Suporte D1 - Home</title>
          <meta property="og:title" content="D1 - Home" key="title" />
        </Head>
        <HomeScreen />
      </Layout.Wrapper>
    </>
  );
};

export default Home;
