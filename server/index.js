const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { authRouter, roomRouter } = require("./routes/route");

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Database Connected");
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", authRouter);
app.use("/rooms", roomRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server Started at PORT: ${process.env.PORT}`);
});
