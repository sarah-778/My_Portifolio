import React, { useState } from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Contact.css"; // (or Contact_2.css depending on your file name)

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showLinks, setShowLinks] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLinks(true); // show social links after form submit
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <p>Feel free to reach out directly or fill out the message form below.</p>
      </div>

      <div className="contact-wrapper">
        {/* Left Side: Contact Form */}
        <div className="contact-form-card">
          <h3>Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>

          {/* Show social/messaging links after form submission */}
          {showLinks && (
            <div className="contact-links">
              <h4>Send your message via:</h4>
              <a
                href={`https://wa.me/256786315298?text=Hello,%20my%20name%20is%20${encodeURIComponent(
                  formData.name
                )}.%0AEmail:%20${encodeURIComponent(
                  formData.email
                )}%0A${encodeURIComponent(formData.message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://x.com/sorishaba526?t=6PKMBaYBX0f4oCRVrRC3hQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter /> X (Twitter)
              </a>
              <a
                href="https://www.instagram.com/sorishaba_s?igsh=MWphbDI3dDk0ejhjNw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
          )}
        </div>

        {/* Right Side: Direct Contact Information */}
        <div className="contact-info-card">
          <h3>Direct Info</h3>

          <div className="info-group">
            <h4>WhatsApp & Phone Numbers</h4>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <a href="https://wa.me/256786315298" target="_blank" rel="noopener noreferrer">
                0786315298
              </a>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <a href="https://wa.me/256789165684" target="_blank" rel="noopener noreferrer">
                0789165684
              </a>
            </div>
          </div>

          <div className="info-group">
            <h4>Email Addresses</h4>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <a href="mailto:sorishaba526@gmail.com">
                sorishaba526@gmail.com
              </a>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <a href="mailto:sarah.orishaba2002@gmail.com">
                sarah.orishaba2002@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;