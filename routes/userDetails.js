// routes/UserDetailsRoutes.js
const express = require("express");
//const UserDetails = require("../models/UserDetails");
// models/UserDetails.js
//const { DataTypes } = require("sequelize");
//const sequelize = require("../config/config"); // Correct import statement
const router = express.Router();
const { authenticateToken } = require("../controllers/userDetailsController");

const {
  createUserdetails,
  login,
  getAllUserDetails,
} = require("../controllers/userDetailsController");
//
// A protected route
router.post("/login", login);

// Define routes for UserDetails-related actions
router.post("/", createUserdetails);
//router.get("/", getUserauth);
router.get("/all", authenticateToken, getAllUserDetails);
//router.delete("/:id", deleteAUserDetails);
//router.put("/:id", updateAUserDetails);
// Add more routes as needed

// module.exports = {
//   createUserdetails,
//   getUserauth,
// };
module.exports = router;
