import React from 'react';

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
        <HomeScreen />
      </Layout.Wrapper>
    </>
  );
};

export default Home;
