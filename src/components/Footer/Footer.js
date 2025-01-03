
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="store-name">Golden Glow</h1>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon icon-facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon icon-instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon icon-twitter" />
          </a>
        </div>
        <div className="email">GoldenGlow@gmail.com</div>
        <p className="footer-note">© 2024.Golden Glow. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer


