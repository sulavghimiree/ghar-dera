const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database Connected");
  });

app.listen(process.env.PORT, () => {
  console.log(`Server Started at PORT: ${process.env.PORT}`);
});
