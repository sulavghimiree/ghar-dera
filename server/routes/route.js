const express = require("express");
const { userRegister, userLogin } = require("../controllers/authController");

const authRouter = express.Router();

authRouter.route("/register").post(userRegister);
authRouter.route("/login").post(userLogin);

module.exports = {
  authRouter,
};
