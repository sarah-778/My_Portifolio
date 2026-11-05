import React from "react";
import { Mail } from "lucide-react"; 
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6"; // Font Awesome 6
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">Sarah Orishaba</div>

        {/* Social Links */}
        <div className="footer-links">
          <a href="mailto:sorishaba526@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail size={20} /> Email
          </a>
          <a href="https://github.com/sarah-778" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} /> GitHub
          </a>
          <a href="www.linkedin.com/in/sarah-orishaba-15229a336" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a href="https://www.instagram.com/sorishaba_s?igsh=MWphbDI3dDk0ejhjNw==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} /> Instagram
          </a>
          <a href="https://x.com/sorishaba526?t=6PKMBaYBX0f4oCRVrRC3hQ&s=09" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={20} /> X
          </a>
          <a
            href="https://wa.me/256786315298" // your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </a>
          <a href="https://www.youtube.com/@orishabasarah-u1s" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} /> YouTube
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Sarah Orishaba. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
