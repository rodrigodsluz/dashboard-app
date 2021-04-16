import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyle } from '@d1.cx/components';
import { RecoilRoot } from 'recoil';
import HomeDataContextProvider from '../src/context/HomeDataContext';
import { UserModal } from '@src/components/UserModal/Modal';
import { SettingModal } from '@src/components/SettingModal/Modal';

const Application = ({ Component, pageProps }: AppProps): JSX.Element => (
  <RecoilRoot>
    <HomeDataContextProvider>
      <GlobalStyle />
      <UserModal />
      <SettingModal/>
      <Component {...pageProps} />
    </HomeDataContextProvider>
  </RecoilRoot>
);

export default Application;
