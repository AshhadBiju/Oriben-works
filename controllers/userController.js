// controllers/userController.js
const { User } = require("../models");
//const sequelize = require("../config/config"); // Import the Sequelize instance

const createUser = async (req, res) => {
  try {
    const { name, address, email, phonenumber } = req.body;
    const newUser = await User.create({ name, address, email, phonenumber });
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
    // if (!user) {
    //   return res.status(404).json({ error: "User not found" });
    // }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
const deleteAllUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: "14",
      },
    });
    // if (!user) {
    //   return res.status(404).json({ error: "User not found" });
    // }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
// Add more controller methods as needed

module.exports = { createUser, getUserById, getAllUser, deleteAllUser };
//createUser();
