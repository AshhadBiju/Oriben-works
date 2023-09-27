const express = require("express");
const router = express.Router();
const {
  createCustomer,
  getCustomerById,
  getAllCustomer,
  deleteACustomer,
  updateACustomer,
} = require("../controllers/customerController");

// Define routes for Customer-related actions
router.post("/", createCustomer);
router.get("/", getAllCustomer);
router.get("/:id", getCustomerById);
router.delete("/:id", deleteACustomer);
router.put("/:id", updateACustomer);
// Add more routes as needed

module.exports = router;
