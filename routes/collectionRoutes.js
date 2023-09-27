const express = require("express");
const router = express.Router();
const {
  createCollection,
  getCollectionById,
  getAllCollection,
  deleteACollection,
  updateACollection,
} = require("../controllers/collectionController");

// Define routes for Collection-related actions
router.post("/", createCollection);
router.get("/", getAllCollection);
router.get("/:id", getCollectionById);
router.delete("/:id", deleteACollection);
router.put("/:id", updateACollection);
// Add more routes as needed

module.exports = router;
