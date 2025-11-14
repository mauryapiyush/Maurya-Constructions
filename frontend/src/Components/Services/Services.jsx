import React, { useState } from "react";
import "./Services.css";
import { services } from "../../Data/Services";

const Services = ({ limit }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Auto convert jpg/png → webp
  const getImage = (img) => {
    return process.env.PUBLIC_URL + img.replace(".jpg", ".webp").replace(".png", ".webp");
  };

  const displayServices = limit ? services.slice(0, limit) : services;

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
              <picture>
                <source srcSet={getImage(service.image)} type="image/webp" />
                <img
                  src={process.env.PUBLIC_URL + service.image}
                  alt={service.title}
                  loading="lazy"
                  onClick={() => setSelectedImage(getImage(service.image))}
                />
              </picture>

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

        {/* Popup Viewer */}
        {selectedImage && (
          <div className="image-popup" onClick={() => setSelectedImage(null)}>
            <div
              className="image-popup-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedImage(null)}>
                ✖
              </button>

              <img src={selectedImage} alt="Full Service" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
