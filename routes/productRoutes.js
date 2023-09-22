// routes/productRoutes.js
const express = require("express");
//const product = require("../models/product");
const router = express.Router();
// models/product.js
//const { DataTypes } = require("sequelize");
//const sequelize = require("../config/config"); // Correct import statement

const {
  createProduct,
  getProductById,
  getAllProduct,
  deleteAProduct,
  updateAProduct,
} = require("../controllers/productController");

// Define routes for product-related actions
router.post("/", createProduct);
router.get("/:id", getProductById);
router.get("/", getAllProduct);
router.delete("/:id", deleteAProduct);
router.put("/:id", updateAProduct);
// Add more routes as needed

module.exports = router;
