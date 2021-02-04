import Head from 'next/head';
import Login from './login';

const Home: React.FC = () => (
  <>
    <Head>
      <title>SupportApp</title>
    </Head>

    <Login />
  </>
);

export default Home;
