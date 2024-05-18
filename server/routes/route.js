const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { userRegister, userLogin } = require("../controllers/authController");
const {
  getAllRooms,
  featuredRoom,
  locationRoom,
  noOfRooms,
  findbyid,
  postRoom,
} = require("../controllers/roomController");

const authRouter = express.Router();
const roomRouter = express.Router();

authRouter.route("/register").post(userRegister);
authRouter.route("/login").post(userLogin);

roomRouter.route("/findAll").get(getAllRooms);
roomRouter.route("/find/featured").get(featuredRoom);
roomRouter.route("/find/location").get(locationRoom);
roomRouter.route("/find/roomCount").get(noOfRooms);
roomRouter.route("/find/:id").get(findbyid);

roomRouter.route("/", verifyToken).post(postRoom);

module.exports = {
  authRouter,
  roomRouter,
};
