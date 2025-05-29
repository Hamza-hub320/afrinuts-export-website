import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/afrinuts-logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="AfriNuts Logo" className="navbar-logo-img" />
          AfriNuts Export
        </Link>
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/" className="nav-links">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-links">About</Link></li>
          <li className="nav-item"><Link to="/products" className="nav-links">Products</Link></li>
          <li className="nav-item"><Link to="/farm" className="nav-links">Our Farm</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-links">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;