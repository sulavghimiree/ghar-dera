import React, { useState } from "react";
import classes from "./Hero.module.css";

const Hero = () => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {};

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Let me find the room you want right now</h2>
        <h5>Search the best room according to your choice</h5>
        <div className={classes.options}>
          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Select the location"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
