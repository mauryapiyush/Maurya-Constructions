import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const phoneNumber = "+91-9987612862";
  const whatsappNumber = "+91-9987612862";

  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
  const phoneLink = `tel:${phoneNumber.replace(/\D/g, "")}`;

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
    setOpen(false);
  };

  return (
    <header className="mc-header">
      <div className="mc-header__inner">
        
        {/* BRAND LOGO */}
        <div className="mc-header__brand">
          <picture>
            {/* Modern browsers use .webp */}
            <source srcSet="/images/logo.png" type="image/webp" />
            {/* Fallback (old browsers) */}
            <img
              src="/images/logo.png"
              alt="Maurya Civil Contractor logo"
              className="mc-header__logo"
              loading="lazy"
            />
          </picture>

          <div className="mc-header__title">
            <span className="mc-header__name">MAURYA CIVIL</span>
            <span className="mc-header__sub">CONTRACTOR</span>
          </div>
        </div>

        {/* NAVIGATION */}
        <nav className={`mc-nav ${open ? "mc-nav--open" : ""}`}>
          <button onClick={() => handleNavClick("/")} className={`mc-link ${location.pathname === "/" ? "active" : ""}`}>Home</button>
          <button onClick={() => handleNavClick("/about")} className={`mc-link ${location.pathname === "/about" ? "active" : ""}`}>About</button>
          <button onClick={() => handleNavClick("/services")} className={`mc-link ${location.pathname === "/services" ? "active" : ""}`}>Services</button>
          <button onClick={() => handleNavClick("/projects")} className={`mc-link ${location.pathname === "/projects" ? "active" : ""}`}>Projects</button>
          <button onClick={() => handleNavClick("/contact")} className={`mc-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</button>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="mc-header__actions">
          <a className="mc-btn mc-btn--whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>

          <a className="mc-btn mc-btn--call" href={phoneLink}>
            Call
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`mc-hamburger ${open ? "mc-hamburger--open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
