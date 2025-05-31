import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/images/afrinuts-export-official-logo.png';

const Navbar = ({ language, toggleLanguage }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>Products</Link>
          </li>
          <li className="nav-item">
            <Link to="/farm" className="nav-links" onClick={closeMobileMenu}>Our Farm</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
          </li>
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