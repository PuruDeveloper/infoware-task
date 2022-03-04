import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">WeatherApp</Link>
      <Link to="/pizza">PizzaCart</Link>
    </div>
  );
}

export default Navbar;
