// routes/userRoutes.js
const express = require("express");
//const User = require("../models/user");
const router = express.Router();
// models/user.js
//const { DataTypes } = require("sequelize");
//const sequelize = require("../config/config"); // Correct import statement

const {
  createUser,
  getUserById,
  getAllUser,
  deleteAUser,
  updateAUser,
} = require("../controllers/userController");

// Define routes for user-related actions
router.post("/", createUser);
router.get("/:id", getUserById);
router.get("/", getAllUser);
router.delete("/:id", deleteAUser);
router.put("/:id", updateAUser);
// Add more routes as needed

module.exports = router;
