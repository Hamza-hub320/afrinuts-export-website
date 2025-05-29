import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaGlobe } from 'react-icons/fa';

const Navbar = ({ language, toggleLanguage }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          AfriNuts Export
        </Link>
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/" className="nav-links">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-links">About</Link></li>
          <li className="nav-item"><Link to="/products" className="nav-links">Products</Link></li>
          <li className="nav-item"><Link to="/farm" className="nav-links">Our Farm</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-links">Contact</Link></li>
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