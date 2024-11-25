import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:vithujan99@hotmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="contactform">
      <div className="container">
        <h2>Kontaktieren Sie Ihre REWE-Filiale</h2>
        <div className="cf-tel-holder">
          <h3>📞 Telefon: 02161-6532660</h3>
          <p>
            Rufen Sie uns gerne während unserer Öffnungszeiten an – wir helfen
            Ihnen weiter!
          </p>
        </div>

        <h3 className="cf-hodlder-titel">
          Oder nutzen Sie unser Kontaktformular:
        </h3>
        <form onSubmit={handleSubmit} className="cf-holder">
          <div className="cf-il-holder">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="cf-il-holder">
            <label for="email">E-Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="cf-il-holder">
            <label for="subject">Betreff</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="cf-il-holder">
            <label for="message">Nachricht</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>

          <button type="submit">Abschicken</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
