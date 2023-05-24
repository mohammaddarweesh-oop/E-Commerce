import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Cart from "../Pages/Cart";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/Cart">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
