import React from "react";
import ContactHero from "./ContactHero/ContactHero";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <div>
      <ContactHero></ContactHero>
      <ContactInfo></ContactInfo>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Contact;
