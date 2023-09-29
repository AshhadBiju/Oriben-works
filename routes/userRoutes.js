const express = require("express");
const router = express.Router();
const { authMiddleware ,isAdmin} = require("../middleware/authenticate");
const {
  createUser,
  getUserById,
  getAllUser,
  deleteAUser,
  updateAUser,

  loginUser,
} = require("../controllers/userController");

// Define routes for User-related actions
router.post("/", createUser);
router.post("/login", loginUser);
router.get("/",authMiddleware,isAdmin, getAllUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteAUser);
router.put("/:id", updateAUser);
// Add more routes as needed

module.exports = router;
