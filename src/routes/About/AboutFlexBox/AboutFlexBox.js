import React, { useContext } from "react";
import "./AboutFlexBox.css";
import "./EmployeeCard.css";
import managerimg from "../../../images/manager.png";
import rewe_außen from "../../../images/rewe_von_außen.jpg";
import { DataContext } from "../../../contexts/DataContext";
import Masonry from "react-masonry-css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const AboutFlexBox = () => {
  const breakpointColumnsObj = {
    default: 3,
    1400: 2,
    930: 1,
  };
  const { apiEmployeeData } = useContext(DataContext);
  return (
    <div class="flex-container">
      {/*Container für Historie*/}
      <div class="container">
        <div class="our-story-section">
          <img
            class="our-story-img"
            src={rewe_außen}
            alt="Bild vom Rewe außen"
          />

          <div class="desc">
            <h2 class="titel">Unsere Geschichte</h2>
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
            <h2 className="titel">Geschäftsführer Sascha Sieger</h2>
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

      {/*Beschreibungen der Mitarbeitern
      <div class="container">
        <div class="flex-item-holder">
          {apiEmployeeData.map((employee) => (
            <div class="flex-item">
              <img
                class="mitarbeiter-img"
                src={employee.profilbild.asset.url}
                alt={employee.name}
              />
              <div class="flex-item-text">
                <h4 class="titel" key={employee._id}>
                  {employee.name}
                </h4>
                <p class="biotext">{employee.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      */}
      {/*Beschreibungen der Mitarbeitern*/}
      <div class="container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="employee-cards-holder"
          columnClassName="my-masonry-grid_column"
        >
          {apiEmployeeData.map((employee) => {
            if (employee.fields.biotext !== undefined) {
              return (
                <div className="employee-card-biotext" key={employee.sys.id}>
                  <div className="ecb-top">
                    <img
                      className="ecb-img"
                      src={employee.fields.profilbild.fields.file.url}
                      alt={employee.fields.name}
                    />
                    <div className="ecb-text-holder">
                      <h4 className="ecb-titel">{employee.fields.name}</h4>
                      <p className="ecb-position">{employee.fields.position}</p>
                    </div>
                  </div>

                  <p className="ecb-bottom">
                    {documentToReactComponents(employee.fields.biotext)}
                  </p>
                </div>
              );
            } else {
              return (
                <div className="employee-card" key={employee.sys.id}>
                  <img
                    className="ec-img"
                    src={employee.fields.profilbild.fields.file.url}
                    alt={employee.fields.name}
                  />
                  <div className="ec-text-holder">
                    <h4 className="ec-titel">{employee.fields.name}</h4>
                    <p className="ec-position">{employee.fields.position}</p>
                  </div>
                </div>
              );
            }
          })}
        </Masonry>
      </div>
    </div>
  );
};

export default AboutFlexBox;
