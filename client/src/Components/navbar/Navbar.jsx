import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <Link to="/" className="left">
          Ghar Dera <BsHouseDoor />
        </Link>
        <ul className="center">
          <li className="listItem">Home</li>
          <li className="listItem">About</li>
          <li className="listItem">Popular</li>
          <li className="listItem">Contact</li>
        </ul>
        <div className="right">
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
