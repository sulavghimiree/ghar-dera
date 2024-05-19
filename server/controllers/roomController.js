const Room = require("../models/Room");

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find({});
    return res.status(200).json(rooms);
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
        ...location,
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
    const room = await Room.findById(req.params.id).populate(
      "owner",
      "-password"
    );
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
    console.log(req.user);
    const newRoom = await Room.create({ ...req.body, owner: req.user.id });

    return res.status(201).json(newRoom);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const putRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room.owner.toHexString() !== req.user.id) {
      throw new Error("You are not allowed to update other people properties");
    } else {
      const updateRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).json(updateRoom);
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (room.owner.toHexString() !== req.user.id) {
      throw new Error("You are not allowed to delete other people properties");
    } else {
      await room.deleteOne();

      return res.status(200).json({ msg: "Succesfully deleted property" });
    }
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

module.exports = {
  getAllRooms,
  locationRoom,
  noOfRooms,
  findbyid,
  postRoom,
  putRoom,
  deleteRoom,
};
