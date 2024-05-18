const Room = require("../models/Room");

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    return res.status(200).json(rooms);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const featuredRoom = async (req, res) => {
  try {
    const featuredRooms = await Room.find({ featured: true }).populate(
      "owner",
      "-password"
    );
    return res.status(200).json(featuredRooms);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const locationRoom = async (req, res) => {
  const location = req.query;
  try {
    if (location) {
      const rooms = await Room.find(location).populate("owner", "-password");
      return res.status(200).json(rooms);
    } else {
      return res.status(200).json({ msg: "No such type" });
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const noOfRooms = async (req, res) => {
  const location = req.query;
  try {
    if (location) {
      const totalRooms = (await Room.find(location)).length;
      return res.status(200).json({
        location: location,
        totalRooms: totalRooms,
      });
    } else {
      return res.status(200).json({ msg: "No such type" });
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const findbyid = async (req, res) => {
  try {
    const room = await Room.find(req.params.id).populate("owner", "-password");
    if (!room) {
      throw new Error("No such room with such id");
    } else {
      return res.status(200).json(room);
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const postRoom = async (req, res) => {
  try {
    const newRoom = await Room.create({ ...req.body, owner: req.user.id });

    return res.status(201).json(newRoom);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

module.exports = {
  getAllRooms,
  featuredRoom,
  locationRoom,
  noOfRooms,
  findbyid,
  postRoom,
};
