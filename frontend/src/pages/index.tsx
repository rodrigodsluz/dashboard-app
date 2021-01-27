import Head from 'next/head';
import { Layout } from '../components';
import { Login } from './Login';

const Home: React.FC = () => (
  <>
    <Head>
      <title>SupportApp</title>
    </Head>
    {/* <Layout title="Title" description="Description">
      Content
    </Layout> */}
    <Login />
  </>
);

export default Home;
