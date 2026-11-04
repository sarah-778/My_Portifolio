import React, { useState } from "react";
import "./Contact.css";

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
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Fill out the form below, then choose where to send your message.</p>

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

        {/* Show links after form is filled */}
        {showLinks && (
          <div className="contact-links">
            <h3>Send your message via:</h3>
            <a
              href={`https://wa.me/256786315298?text=Hello, my name is ${formData.name}.%0AEmail: ${formData.email}%0A${formData.message}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/sorishaba526?t=6PKMBaYBX0f4oCRVrRC3hQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.instagram.com/sorishaba_s?igsh=MWphbDI3dDk0ejhjNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
