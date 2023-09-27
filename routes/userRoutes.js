const express = require("express");
const router = express.Router();
const {
  createUser,
  getUserById,
  getAllUser,
  deleteAUser,
  updateAUser,
} = require("../controllers/userController");

// Define routes for User-related actions
router.post("/", createUser);
router.get("/", getAllUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteAUser);
router.put("/:id", updateAUser);
// Add more routes as needed

module.exports = router;
