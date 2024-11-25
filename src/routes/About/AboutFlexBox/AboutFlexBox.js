import React from "react";
import "./AboutFlexBox.css";
import managerimg from "../../../images/manager.png";
import rewe_außen from "../../../images/rewe_von_außen.jpg";
const AboutFlexBox = () => {
  const persondesc = [
    {
      id: 1,
      Titel: "Manager",
      Text: "A biography, or simply bio, is a detailed description of a person's life. It involves more than just basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of their life, including intimate details of experience, and may include an analysis of the subject's personality.",
    },
    {
      id: 2,
      Titel: "Manager",
      Text: "A biography, or simply bio, is a detailed description of a person's life. It involves more than just basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of their life, including intimate details of experience, and may include an analysis of the subject's personality.",
    },
    {
      id: 3,
      Titel: "Manager",
      Text: "A biography, or simply bio, is a detailed description of a person's life. It involves more than just basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of their life, including intimate details of experience, and may include an analysis of the subject's personality.",
    },
    {
      id: 4,
      Titel: "Manager",
      Text: "A biography, or simply bio, is a detailed description of a person's life. It involves more than just basic facts like education, work, relationships, and death; it portrays a person's experience of these life events. Unlike a profile or curriculum vitae (résumé), a biography presents a subject's life story, highlighting various aspects of their life, including intimate details of experience, and may include an analysis of the subject's personality.",
    },
  ];
  return (
    <div class="flex-container">
      {/*Container für Historie*/}
      <div class="container">
        <div class="manager-container">
          <img
            class="rewe-außen-img"
            src={rewe_außen}
            alt="Bild vom Rewe außen"
          />

          <div class="desc">
            <h4 class="titel">Unsere Geschichte</h4>
            <p class="biotext">
              A biography, or simply bio, is a detailed description of a
              person's life. It involves more than just basic facts like
              education, work, relationships, and death; it portrays a person's
              experience of these life events. Unlike a profile or curriculum
              vitae (résumé), a biography presents a subject's life story,
              highlighting various aspects of their life, including intimate
              details of experience, and may include an analysis of the
              subject's personality.
            </p>
          </div>
        </div>
      </div>

      {/*Horizontale Linie*/}
      <div class="container">
        <div class="hr"></div>
      </div>

      {/*2.Überschrift*/}
      <div className="hero-text-content-center">
        <h1>Das Familien Sieger Team</h1>
      </div>

      {/*Container für den Geschäftsführer*/}
      <div class="container">
        <div class="manager-container">
          <div class="desc">
            <h4 class="titel">Geschäftsführer Sascha Sieger</h4>
            <p class="biotext">
              A biography, or simply bio, is a detailed description of a
              person's life. It involves more than just basic facts like
              education, work, relationships, and death; it portrays a person's
              experience of these life events. Unlike a profile or curriculum
              vitae (résumé), a biography presents a subject's life story,
              highlighting various aspects of their life, including intimate
              details of experience, and may include an analysis of the
              subject's personality.
            </p>
          </div>
          <img
            class="manager-img"
            src={managerimg}
            alt="Bild vom Filialleiter"
          />
        </div>
      </div>

      {/*Beschreibungen der Mitarbeitern*/}
      <div class="container">
        <div class="flex-item-holder">
          {persondesc.map((person) => (
            <div class="flex-item">
              <img
                class="mitarbeiter-img"
                src={managerimg}
                alt="Foto vom Mitarbeiter"
              />
              <div class="flex-item-text">
                <h4 class="titel" key={person.id}>
                  {person.Titel}
                </h4>
                <p class="biotext">{person.Text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutFlexBox;
