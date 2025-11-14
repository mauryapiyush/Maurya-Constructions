import React, { useState } from "react";
import "./Projects.css";
import { projects } from "../../Data/Projects";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to pick the WebP file automatically
  const getImage = (img) => {
    return process.env.PUBLIC_URL + img.replace(".jpg", ".webp").replace(".png", ".webp");
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Our Projects</h2>

        <p className="projects-subtitle">
          A glimpse of some of our recently completed civil and interior works across Maharashtra.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={index}
              onClick={() => setSelectedImage(getImage(project.image))}
            >
              <picture>
                {/* WebP image */}
                <source
                  srcSet={getImage(project.image)}
                  type="image/webp"
                />
                {/* Fallback (in case browser doesn't support WebP) */}
                <img
                  src={process.env.PUBLIC_URL + project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </picture>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>
            </div>
          ))}
        </div>

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

              <img src={selectedImage} alt="Project Full" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
