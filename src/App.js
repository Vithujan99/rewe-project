import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./routes/About/About";
import Career from "./routes/Career/Career";
import Home from "./routes/Home/Home";
import Contact from "./routes/Contact/Contact";
import JobDetail from "./routes/Career/JobsCards/JobDetail/JobDetail";

import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FamilieSieger" element={<About />} />
        <Route path="/Karriere" element={<Career />} />
        <Route path="/Kontakt" element={<Contact />} />
        {/* Route for the detailed job page */}
        <Route path="/Karriere/:id" element={<JobDetail />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
