import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import HomeDataContextProvider from '../context/HomeDataContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <HomeDataContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </HomeDataContextProvider>
  </>
);

export default MyApp;
