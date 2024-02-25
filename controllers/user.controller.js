const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getOneUser = async (req, res) => {
  const users = await User.findOne({
    id: req.params.id,
  });
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const createUser = async (req, res) => {
  try {
    const users = new User({
      id: uuidv4(),
      name: req.body.name,
      age: Number(req.body.age),
    });

    await users.save();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const users = await User.findOne({
      id: req.params.id,
    });
    users.name = req.body.name;
    users.age = Number(req.body.age);
    await users.save();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  await User.deleteOne({
    id: req.params.id,
  });
  try {
    res.status(200).json({ message: "deleted is successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getAllUser, getOneUser, createUser, updateUser, deleteUser };
