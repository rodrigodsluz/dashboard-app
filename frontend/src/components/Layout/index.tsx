import { Navbar } from '../../components';

const Layout = ({ title = 'Title', description = 'Description', children }) => (
  <>
    <Navbar />
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div>{children}</div>
  </>
);

export default Layout;
