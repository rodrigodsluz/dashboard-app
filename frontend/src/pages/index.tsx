import Head from 'next/head';
import { LineHeader } from '../components/LineHeader';
import Login from './login';

const Home: React.FC = () => (
  <>
    <Head>
      <title>SupportApp</title>
    </Head>

    {/*  <LineHeader /> */}
    <Login />
  </>
);

export default Home;
