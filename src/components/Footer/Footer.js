import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} AfriNuts Export. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;