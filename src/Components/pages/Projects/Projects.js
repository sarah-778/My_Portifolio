import React from "react";
import "./Projects.css";

// Import project images
import flyerImg from "../../../assets/Flyer.jpg";
import businessCardImg from "../../../assets/Business.png";
import ITlogoImg from "../../../assets/IT logo.jpg";
import networkingImg from "../../../assets/EthernetTermination.jpg";
import configureImg from "../../../assets/configure.jpg";
import hardwareImg from "../../../assets/hardware.jpg";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      {/* Networking & Hardware Support */}
      <div className="project-category">
        <h3>🌐 Networking & Hardware Support</h3>

        <div className="projects-grid">
          {/* Ethernet Cable Termination */}
          <div className="project-card">
            <img src={networkingImg} alt="Ethernet Cable Termination and Testing" />
            <h4>Ethernet Cable Termination & Testing</h4>
            <p>
              Hands-on RJ45 crimping, T568B/T568A cable termination, cable testing, 
              and network installation for reliable connectivity.
            </p>
          </div>

          {/* Router & Switch Configuration */}
          <div className="project-card">
            <img src={configureImg} alt="Router and Switch Configuration" />
            <h4>Router & Switch Configuration</h4>
            <p>
              Configuring routers, setting up wireless networks, managing LAN settings, 
              and establishing secure network connections.
            </p>
          </div>

          {/* Hardware & System Troubleshooting */}
          <div className="project-card">
            <img src={hardwareImg} alt="Hardware Troubleshooting and Maintenance" />
            <h4>Hardware Troubleshooting & Maintenance</h4>
            <p>
              Diagnosing computer hardware faults, performing system maintenance, 
              component replacements, and general IT support.
            </p>
          </div>
        </div>
      </div>

      {/* Graphics Design Highlights */}
      <div className="project-category">
        <h3>🎨 Graphics Design Highlights</h3>

        <div className="projects-grid">
          {/* Logo Designs */}
          <div className="project-card">
            <img src={ITlogoImg} alt="Logo Design sample" />
            <h4>Logo Designs</h4>
            <p>
              Creative and professional logo designs created for businesses
              and personal brands.
            </p>
          </div>

          {/* Business Cards */}
          <div className="project-card">
            <img src={businessCardImg} alt="Business Card Design sample" />
            <h4>Business Cards</h4>
            <p>
              Professional business card designs for companies, brands, and
              individuals.
            </p>
          </div>

          {/* Flyer Designs */}
          <div className="project-card">
            <img src={flyerImg} alt="Flyer Design sample" />
            <h4>Flyer Designs</h4>
            <p>
              Creative flyers for events, promotions, advertisements, and
              marketing campaigns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;