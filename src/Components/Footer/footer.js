import React from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Official X (Twitter) icon
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      {/* Social Icons with Brand Logos */}
      <div className="social-icons">
        <a href="https://wa.me/256786315298" target="_blank" rel="noopener noreferrer" title="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://x.com/sorishaba526?t=6PKMBaYBX0f4oCRVrRC3hQ&s=09" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
          <FaXTwitter />
        </a>
        <a href="https://www.instagram.com/sorishaba_s?igsh=MWphbDI3dDk0ejhjNw==" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram />
        </a>
      </div>

      {/* Direct Contact Links */}
      <div className="footer-links">
        <a href="mailto:sorishaba526@gmail.com">
          <FaEnvelope /> sorishaba526@gmail.com
        </a>
        <a href="mailto:sarah.orishaba2002@gmail.com">
          <FaEnvelope /> sarah.orishaba2002@gmail.com
        </a>
        <a href="https://wa.me/256786315298" target="_blank" rel="noopener noreferrer">
          <FaPhone /> 0786315298
        </a>
        <a href="https://wa.me/256789165684" target="_blank" rel="noopener noreferrer">
          <FaPhone /> 0789165684
        </a>
      </div>

      <p>&copy; {new Date().getFullYear()} Sarah Orishaba. All rights reserved.</p>
    </footer>
  );
}

export default Footer;