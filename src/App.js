import React from "react";
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

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FamilieSieger" element={<About />} />
        <Route path="/Karriere" element={<Career />} />
        <Route path="/Kontakt" element={<Contact />} />
        {/* Route for the detailed job page */}
        <Route path="/Karriere/:id" element={<JobPage />} />
        <Route path="/Impressum" element={<Impressum />} />
        <Route path="/Datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
