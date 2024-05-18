const express = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { userRegister, userLogin } = require("../controllers/authController");
const {
  getAllRooms,
  locationRoom,
  noOfRooms,
  findbyid,
  postRoom,
  putRoom,
  deleteRoom,
} = require("../controllers/roomController");

const authRouter = express.Router();
const roomRouter = express.Router();

authRouter.route("/register").post(userRegister);
authRouter.route("/login").post(userLogin);

roomRouter.route("/findAll").get(getAllRooms);
roomRouter.route("/find/location").get(locationRoom);
roomRouter.route("/find/roomCount").get(noOfRooms);
roomRouter.route("/find/:id").get(findbyid);

roomRouter.route("/").all(verifyToken).post(verifyToken, postRoom);
roomRouter.route("/:id").all(verifyToken).put(putRoom).delete(deleteRoom);

module.exports = {
  authRouter,
  roomRouter,
};
