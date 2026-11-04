import React from "react";
import "./Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <h2>My Services</h2>

      <div className="services-grid">
        {/* Software & Web Development */}
        <div className="service-card">
          <div className="service-icon">💻</div>
          <h3>Web & App Development</h3>
          <p>
            Building responsive, dynamic full-stack web applications and mobile 
            solutions using modern technologies like React, Flutter, PHP, and Laravel.
          </p>
        </div>

        {/* Website Management */}
        <div className="service-card">
          <div className="service-icon">🛠️</div>
          <h3>Website Management</h3>
          <p>
            Ensuring your web platforms run smoothly with reliable maintenance, 
            updates, performance optimization, secure domain handling, and server management.
          </p>
        </div>

        {/* System Management */}
        <div className="service-card">
          <div className="service-icon">⚙️</div>
          <h3>System Management</h3>
          <p>
            Configuring, monitoring, and troubleshooting digital systems, backend 
            databases, and administrative tools to streamline operational workflows.
          </p>
        </div>

        {/* Networking */}
        <div className="service-card">
          <div className="service-icon">🌐</div>
          <h3>Networking Support</h3>
          <p>
            Providing hands-on computer networking support, router configuration, 
            cable termination and testing, and robust network troubleshooting.
          </p>
        </div>

        {/* Basic Computing */}
        <div className="service-card">
          <div className="service-icon">🖥️</div>
          <h3>Basic Computing</h3>
          <p>
            Offering foundational computer literacy training, software installation, 
            general hardware/software troubleshooting, and essential desktop support.
          </p>
        </div>

        {/* Graphics Design */}
        <div className="service-card">
          <div className="service-icon">🎨</div>
          <h3>Graphics Design</h3>
          <p>
            Creating eye-catching visual assets including flyers, business cards, 
            custom logos, posters, and birthday cards to elevate your brand identity.
          </p>
        </div>
      </div>

      {/* Skills Highlight Section */}
      <div className="skills-container">
        <h3>Technical Expertise</h3>
        <p className="skills-text">
          React, Flutter, Laravel, Python, Flask, MySQL, Git, Nginx, 
          DigitalOcean, Network Administration, Desktop Support, UI/UX Prototyping, & Graphic Layouts.
        </p>
      </div>
    </section>
  );
}

export default Services;