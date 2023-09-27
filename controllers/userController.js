// controllers/userController.js
const { Model } = require("sequelize");
const models = require("../models");
const { User } = require("../models");
//const sequelize = require("../config/config"); // Import the Sequelize instance

const createUser = async (req, res) => {
  try {
    const { name, email, phonenumber, username, password, role, isActive } = req.body;
    const newUser = await User.create({ name, email, phonenumber, username, password, role, isActive });
    res.status(201).json(newUser);
    console.log("User created:", newUser.toJSON());
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};
// Add more controller methods as needed
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
const getAllUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
const deleteAUser = async (req, res) => {
  try {
    const id = req.params.id;
    //const {name,address,email,phonenumber}=req.bo
    const user = await User.destroy({
      where: {
        id: id,
      },
    });
    //res.json(user);
    res.status(200).json({ message: "deleted user" });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
const updateAUser = async (req, res) => {
  try {
    const id = req.params.id;
    //const {name,address,email,phonenumber}=req.bo
    const user = await User.update(req.body, {
      where: {
        id: id,
      },
    });
    // const user= await User.findOneAndUpdate({})
    // if (!user) {
    //   return res.status(404).json({ error: "User not found" });
    // }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

module.exports = {
  createUser,
  getUserById,
  getAllUser,
  deleteAUser,
  updateAUser,
};
//createUser();
