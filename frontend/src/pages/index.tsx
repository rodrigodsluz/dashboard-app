import Head from 'next/head';
import { Layout } from '../components';
import { LineHeader } from '../components/LineHeader';
import { Login } from './Login';

const Home: React.FC = () => (
  <>
    <Head>
      <title>SuportApp</title>
    </Head>

    <LineHeader />
    <Login />
  </>
);

export default Home;
