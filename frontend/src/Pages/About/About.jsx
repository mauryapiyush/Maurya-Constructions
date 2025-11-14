import React from "react";
import "./About.css";

const About = () => {
  // Convert jpg/png -> webp automatically
  const getImage = (imgPath) => {
    return imgPath.replace(".jpg", ".webp").replace(".png", ".webp");
  };

  return (
    <div className="about-page">
      {/* Hero Section with WebP + fallback */}
      <section className="about-hero">
        <picture>
          <source srcSet="/images/About.webp" type="image/webp" />
          <img
            src="/images/About.jpg"
            alt="About Maurya Constructions"
            className="about-hero-img"
            loading="lazy"
          />
        </picture>

        <div className="overlay">
          <h1>About Maurya Constructions</h1>
          <p>Building Trust, Quality, and Excellence across Maharashtra</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            Maurya Constructions is a trusted civil contracting company providing
            high-quality construction, renovation, and interior services across
            Maharashtra. With a strong focus on innovation, craftsmanship, and
            client satisfaction, we have successfully completed numerous
            residential, commercial, and industrial projects.
          </p>

          <h2>Our Mission</h2>
          <p>
            To deliver top-notch construction and renovation services using modern
            techniques, reliable materials, and a skilled team — ensuring lasting
            satisfaction for our clients.
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
          <picture>
            <source srcSet={getImage("/images/About2.jpg")} type="image/webp" />
            <img
              src="/images/About2.jpg"
              alt="About Maurya Constructions"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      {/* Stats Section */}
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
