import React from 'react';
import './Footer.css';
import { FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Follow Us */}
        <p className="follow-text">Follow us on</p>

        {/* Social Media Icons */}
        <div className="footer-icons">
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>

          <a 
            href="https://www.instagram.com/lalbahadurmaurya01?igsh=MWIxOXpidTBoc3JlbA==" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a 
            href="https://wa.me/919987612862" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Footer Text */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Maurya Constructions. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
