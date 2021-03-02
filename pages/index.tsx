import React, { useEffect } from 'react';
import Layout from '../src/components/Layout';
import LoginScreen from '../src/screens/Login';
import { removeCookie } from '../src/utils/cookie';

type Props = {
  isRemoveCookie: boolean;
};
/**
 * @export
 * @component
 * @name Index
 *
 * @description
 * Componente que representa a pagina de login.
 */
const Index = ({ isRemoveCookie = true }: Props): JSX.Element => {
  useEffect(() => {
    if (isRemoveCookie) {
      removeCookie('token');
    }
  }, [isRemoveCookie]);

  return (
    <Layout.Wrapper>
      <LoginScreen />
    </Layout.Wrapper>
  );
};

Index.getInitialProps = async () => {
  return { isRemoveCookie: true };
};

export default Index;
