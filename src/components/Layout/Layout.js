import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;