const express = require("express");
const router = express.Router();
const upload = require("../utils/imageUploader");
const { createCategory } = require("../controllers/categoryController");

// Define routes for category-related actions
router.post("/", upload.single("imageURL"), createCategory);
// Add more routes as needed

module.exports = router;
