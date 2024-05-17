const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      min: 20,
    },

    price: {
      type: Number,
      required: true,
    },

    image: [
      {
        type: String,
        required: true,
      },
    ],

    unlockedUsers: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
