const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { DEFAULT_SALT_ROUNDS } = require("../constants");

const userRegister = async (req, res) => {
  try {
    const isExistingEmail = await User.findOne({ email: req.body.email });
    const isExistingUsername = await User.findOne({
      username: req.body.username,
    });
    if (isExistingEmail) {
      throw new Error("Email already registered!");
    }
    if (isExistingUsername) {
      throw new Error("Username already taken!");
    }

    const salt = await bcrypt.genSalt(DEFAULT_SALT_ROUNDS);

    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = await User.create({
      ...req.body,
      password: hashedPassword,
    });

    const { password, ...others } = newUser._doc;
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "4h",
    });

    return res.status(201).json({ others, token });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error("Wrong Credentials!");
    }

    const comparePass = await bcrypt.compare(req.body.password, user.password);
    if (!comparePass) {
      throw new Error("Wrong Credentials!");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "4h",
    });
    const { password, ...others } = user._doc;

    return res.status(200).json({ others, token });
  } catch (err) {
    return res.status(500).json(err.message);
  }
};

module.exports = {
  userRegister,
  userLogin,
};
