import React, { useState } from "react";
import "./Services.css";
import { services } from "../../Data/Services";

const Services = ({ limit }) => {
  const displayServices = limit ? services.slice(0, limit) : services;

  // State for image popup
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <p className="services-subtitle">
          We provide complete civil and interior solutions for homes, offices, and commercial projects.
        </p>

        <div className="services-grid">
          {displayServices.map((service, index) => (
            <div className="service-card" key={index}>
              <img
                src={service.image}
                alt={service.title}
                onClick={() => setSelectedImage(service.image)}
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {limit && (
          <div className="view-all-container">
            <a href="/services" className="view-all-btn">
              View All Services
            </a>
          </div>
        )}

        {/* Popup for full image */}
        {selectedImage && (
          <div className="image-popup" onClick={() => setSelectedImage(null)}>
            <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setSelectedImage(null)}>
                ✖
              </button>
              <img src={selectedImage} alt="Service Full" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
