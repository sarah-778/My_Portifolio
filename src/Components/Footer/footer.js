import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://wa.me/256786315298" target="_blank" rel="noopener noreferrer" title="WhatsApp">
          📱
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          💼
        </a>
        <a href="https://x.com/sorishaba526?t=6PKMBaYBX0f4oCRVrRC3hQ&s=09" target="_blank" rel="noopener noreferrer" title="X (Twitter)">
        X
        </a>
        <a href="https://www.instagram.com/sorishaba_s?igsh=MWphbDI3dDk0ejhjNw==" target="_blank" rel="noopener noreferrer" title="Instagram">
          📸
        </a>
      </div>

      <div className="footer-links">
        <a href="mailto:sorishaba526@gmail.com">sorishaba526@gmail.com</a>
        <a href="mailto:sarah.orishaba2002@gmail.com">sarah.orishaba2002@gmail.com</a>
        <a href="https://wa.me/256786315298" target="_blank" rel="noopener noreferrer">0786315298</a>
        <a href="https://wa.me/256789165684" target="_blank" rel="noopener noreferrer">0789165684</a>
      </div>

      <p>&copy; {new Date().getFullYear()} Sarah Orishaba. All rights reserved.</p>
    </footer>
  );
}

export default Footer;