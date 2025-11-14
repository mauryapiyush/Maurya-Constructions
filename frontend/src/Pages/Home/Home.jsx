import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-page">
      {/* Hero Section */}
      <div
        className="home-hero"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      >
        <div className="home-overlay">
          <motion.div
            className="home-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Maurya Constructions</h1>
            <p>Building Trust, Quality & Excellence Across Maharashtra</p>
            <div className="home-buttons">
              <motion.a
                href="/services"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Our Services
              </motion.a>
              <motion.a
                href="/contact"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Preview */}
      <motion.div
        className="home-about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Who We Are</h2>
        <p>
          We are a trusted civil contracting company based in Maharashtra,
          specializing in residential, commercial, and renovation works.
          From interiors to plumbing — we deliver excellence in every project.
        </p>
        <a href="/about" className="btn-primary">Learn More</a>
      </motion.div>

      {/* Services Overview */}
      <motion.div
        className="home-services"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Our Key Services</h2>
        <div className="service-grid">
          {[
            {
              title: "🏗️ Construction",
              desc: "Complete civil contracting for homes, offices & buildings.",
            },
            {
              title: "🧱 Renovation",
              desc: "Full home & commercial space renovations and repairs.",
            },
            {
              title: "🚿 Plumbing & Interiors",
              desc: "Modern interior solutions & plumbing with quality materials.",
            },
          ].map((service, i) => (
            <motion.div
              className="service-item"
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
        <a href="/services" className="btn-secondary">See All Services</a>
      </motion.div>

      {/* Projects Preview */}
      <motion.div
        className="home-projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Our Work</h2>
        <p className="project-subtitle">
          Some of our recent construction and renovation projects across Maharashtra
        </p>
        <div className="project-preview">
          {[
            { src: "/images/Project1.webp", title: "Luxury Residential Hall Interior", loc: "Maharashtra" },
            { src: "/images/Project2.webp", title: "Modern Hall", loc: "Maharashtra" },
            { src: "/images/Project3.webp", title: "Contemporary TV unit with Wooden Finish", loc: "Maharashtra" },
          ].map((proj, i) => (
            <motion.div
              className="project-card"
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={proj.src}
                alt={proj.title}
                loading="lazy"
              />
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.loc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <a href="/projects" className="btn-primary">View Projects</a>
      </motion.div>
    </section>
  );
};

export default Home;
