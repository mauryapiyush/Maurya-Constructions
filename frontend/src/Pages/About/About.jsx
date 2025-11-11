import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* ✅ Hero section with inline background from public/images */}
      <section
        className="about-hero"
        style={{ backgroundImage: "url('/images/about.webp')" }}
      >
        <div className="overlay">
          <h1>About Maurya Constructions</h1>
          <p>Building Trust, Quality, and Excellence across Maharashtra</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Maurya Constructions is a trusted civil contracting company providing high-quality construction, renovation, and interior services across Maharashtra. 
            With a strong focus on innovation, craftsmanship, and client satisfaction, we have successfully completed numerous residential, commercial, and industrial projects.
          </p>

          <h2>Our Mission</h2>
          <p>
            To deliver top-notch construction and renovation services using modern techniques, reliable materials, and a skilled team — ensuring lasting satisfaction for our clients.
          </p>

          <h2>Why Choose Us?</h2>
          <ul>
            <li>✅ Professional and skilled workforce</li>
            <li>✅ On-time project completion</li>
            <li>✅ Affordable and transparent pricing</li>
            <li>✅ Quality workmanship and materials</li>
            <li>✅ End-to-end interior and renovation solutions</li>
          </ul>
        </div>

        <div className="about-image">
          <img src="/images/About2.jpg" alt="About Maurya Constructions" />
        </div>
      </section>

      <section className="about-stats">
        <div className="stat">
          <h3>35+</h3>
          <p>Years of Experience</p>
        </div>
        <div className="stat">
          <h3>200+</h3>
          <p>Completed Projects</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
      </section>
    </div>
  );
};

export default About;
