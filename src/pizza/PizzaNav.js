import React from "react";
import { Link } from "react-router-dom";

function PizzaNav() {
  return (
    <div className="pizzanav">
      <div className="nav-links">
        <Link to="/pizza">Home</Link>
        <Link to="/pizza-cart">Cart</Link>
      </div>
      <div className="nav-menubar"></div>
    </div>
  );
}

export default PizzaNav;
