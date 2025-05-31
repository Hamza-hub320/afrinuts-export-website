import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/afrinuts-export-official-logo.png';

const Navbar = ({ language, toggleLanguage }) => {
  const location = useLocation();
  const [click, setClick] = useState(false);

  // Improved route matching function
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Navigation items data
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/products', name: 'Products' },
    { path: '/farm', name: 'Our Farm' },
    { path: '/contact', name: 'Contact' },
  ];

  const handleClick = () => {
    setClick(!click);
    document.body.classList.toggle('menu-open', !click);
  };

  const closeMobileMenu = () => {
    setClick(false);
    document.body.classList.remove('menu-open');
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img 
            src={logo} 
            alt="AfriNuts Export Logo" 
            className="nav-logo-img"
          />
          <span className="logo-text">AfriNuts Export</span>
        </Link>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Menu */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {navItems.map((item) => (
            <li className="nav-item" key={item.path}>
              <Link
                to={item.path}
                className={`nav-links ${isActive(item.path) ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="visually-hidden">(current)</span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Language Toggle */}
        <button className="navbar-lang-toggle" onClick={toggleLanguage}>
          <FaGlobe />
          <span>{language === 'en' ? 'FR' : 'EN'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;