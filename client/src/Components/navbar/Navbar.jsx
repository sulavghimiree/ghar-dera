import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { BsHouseDoor } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Link to="/" className="left">
          Ghar Dera <BsHouseDoor />
        </Link>
        <ul className={classes.center}>
          <li className={classes.listItem}>Home</li>
          <li className={classes.listItem}>About</li>
          <li className={classes.listItem}>Popular</li>
          <li className={classes.listItem}>Contact</li>
        </ul>
        <div className={classes.right}>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
