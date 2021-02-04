import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { LineHeader } from '../components/LineHeader/index';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    {/* <LineHeader /> */}
    <Component {...pageProps} />
    <GlobalStyle />
  </>
);

export default MyApp;
