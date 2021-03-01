import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyle } from 'd1-components';
import { RecoilRoot } from 'recoil';
import HomeDataContextProvider from '../src/context/HomeDataContext';

const Application = ({ Component, pageProps }: AppProps): JSX.Element => (
  <RecoilRoot>
    <HomeDataContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </HomeDataContextProvider>
  </RecoilRoot>
);

export default Application;
