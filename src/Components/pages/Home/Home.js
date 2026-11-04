import React from "react";
import "./Home.css"; 
import myPhoto from "../../../assets/Pre.jpg"; // adjust path
import { Link } from "react-router-dom";  // Import Link for routing

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Sarah Orishaba</span>
        </h1>
        <h2>Full-Stack Software Developer & IT Specialist</h2>
        <p>
          Dedicated Computer Science graduate from the Women's Institute of
          Technology Uganda (WITU) with hands-on expertise in full-stack software
          development, backend systems, and IT infrastructure support. Proven
          experience in building dynamic web applications, network installation,
          and troubleshooting technical solutions to solve real-world problems.
        </p>

        <div className="home-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="home-image">
        <img src={myPhoto} alt="Sarah Orishaba" />
      </div>
    </section>
  );
}

export default Home;