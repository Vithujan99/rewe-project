import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Navbar from "./components/Navbar/Navbar";
import About from "./routes/About/About";
import Career from "./routes/Career/Career";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import JobPage from "./routes/JobPage/JobPage";
import Impressum from "./routes/FooterPages/Impressum/Impressum";
import Datenschutz from "./routes/FooterPages/Datenschutz/DatenSchutz";
import Footer from "./components/Footer/Footer";
import "./App.css";
import DelPickButton from "./components/DelPickButton/DelPickButton";
import klaroConfig from "./config/klaro-config";

function App() {
  useEffect(() => {
    // Klaro initialisieren
    const Klaro = require("klaro");
    Klaro.setup(klaroConfig);
  }, []);
  return (
    <div className="App">
      <Navbar></Navbar>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/FamilieSieger" element={<About />} />
        <Route path="/Karriere" element={<Career />} />
        <Route path="/Kontakt" element={<Contact />} />
        {/* Route for the detailed job page */}
        <Route path="/Karriere/:id" element={<JobPage />} />
        <Route path="/Impressum" element={<Impressum />} />
        <Route path="/Datenschutz" element={<Datenschutz />} />
      </Routes>
      <DelPickButton />
      <Footer></Footer>
      <div id="klaro-consent"></div> {/* Klaro Consent-Dialog */}
    </div>
  );
}

export default App;
