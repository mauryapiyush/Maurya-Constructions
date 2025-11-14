import React from "react";
import "./Contact.css";

const Contact = () => {
  const contacts = [
    {
      number: "+91-9987612862",
      label: "Primary",
    },
    {
      number: "+91-8097092660",
      label: "Secondary",
    },
  ];

  return (
    <section className="contact-page">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Get in touch with Maurya Constructions for your next project in Maharashtra.
        </p>

        <div className="contact-cards">
          {/* Office Location */}
          <div className="contact-card">
            <h3>📍 Office Location</h3>
            <p>Maharashtra, India</p>
          </div>

          {/* Contact Cards */}
          {contacts.map((contact, index) => {
            const phoneLink = `tel:${contact.number.replace(/\D/g, "")}`;
            const whatsappLink = `https://wa.me/${contact.number.replace(/\D/g, "")}`;

            return (
              <div className="contact-card" key={index}>
                <h3>📞 {contact.label} Number</h3>

                <a href={phoneLink} className="contact-btn call-btn">
                  {contact.number}
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn whatsapp-btn"
                >
                  Message on WhatsApp
                </a>
              </div>
            );
          })}
        </div>

        <p className="contact-footer">
          Maurya Constructions © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
};

export default Contact;
