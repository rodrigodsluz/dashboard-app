import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyle } from '@d1.cx/components';
import { RecoilRoot } from 'recoil';
import HomeDataContextProvider from '../src/context/HomeDataContext';
import UserModal from '@src/components/Modal/Modal';

const Application = ({ Component, pageProps }: AppProps): JSX.Element => (
  <RecoilRoot>
    <HomeDataContextProvider>
      <GlobalStyle />
      <UserModal />
      <Component {...pageProps} />
    </HomeDataContextProvider>
  </RecoilRoot>
);

export default Application;
