import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">Über uns</Link>
      <Link to="/careers">Karriere</Link>
    </div>
  );
};

export default Navbar;
