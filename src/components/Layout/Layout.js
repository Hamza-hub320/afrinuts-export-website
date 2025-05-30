
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />  {/* <- This renders the active page (Home, About, etc.) */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;