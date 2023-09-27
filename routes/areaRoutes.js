const express = require("express");
const router = express.Router();
const {
  createArea,
  getAreaById,
  getAllArea,
  deleteAArea,
  updateAArea,
} = require("../controllers/areaController");

// Define routes for Area-related actions
router.post("/", createArea);
router.get("/", getAllArea);
router.get("/:id", getAreaById);
router.delete("/:id", deleteAArea);
router.put("/:id", updateAArea);
// Add more routes as needed

module.exports = router;
