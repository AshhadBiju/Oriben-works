const express = require("express");
const router = express.Router();
const { User } = require("../models"); // Import your Sequelize models

// Create a new user
router.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add more routes and CRUD operations as needed

module.exports = router;
