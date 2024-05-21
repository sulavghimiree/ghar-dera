import React from "react";
import classes from "./PopularRooms.module.css";

const PopularRooms = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h5>Different types of Properties</h5>
          <h2>Best types of properties for you</h2>
        </div>
        <div className={classes.properties}>
        </div>
      </div>
    </div>
  );
};

export default PopularRooms;
