import React from 'react';
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import "../styles/footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>Email: satyaswarupaparida130@gmail.com</p>
          <p>Phone: +91 7008671443</p>
          <p>Address: Bhadrak, odisha, 756100</p>
        </div>
        <div className="social-icons">
          <h3>Follow Us</h3>
          <a href="https://wa.me/+917008671443" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/rabble_razz/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/Satyaswarupa" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/satyaswarupa/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Satyaswarupa Parida. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

