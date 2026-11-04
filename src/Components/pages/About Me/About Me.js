import React from "react";
import "./About Me.css";
import aboutPhoto from "../../../assets/about.png"; // Adjust path as needed
import { Link } from "react-router-dom";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutPhoto} alt="Sarah Orishaba" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Sarah Orishaba</strong>, a dedicated Computer Science graduate 
            from the <strong>Women's Institute of Technology Uganda (WITU)</strong> based in 
            Kampala, Uganda. I specialize in bridging the gap between functional code, 
            robust network infrastructure, and striking visual design.
          </p>
          <p>
            My technical skill set spans full-stack software development (building dynamic web 
            and mobile solutions), hands-on IT infrastructure support (router configuration, 
            cable termination, and hardware troubleshooting), and creative graphic design 
            (crafting professional brand identities, flyers, and logos).
          </p>
          <p>
            Whether I'm engineering backend workflows or designing clean user interfaces, 
            my goal is to deliver impactful, user-centric technology solutions that solve 
            real-world challenges.
          </p>

          <Link to="/projects" className="btn">
            Explore My Work
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;