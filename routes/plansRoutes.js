const express = require("express");
const router = express.Router();
const {
  createPlans,
 // getPlansById,
  getAllPlans,
  deleteAPlans,
  updateAPlans,
} = require("../controllers/plansController");

// Define routes for Plans-related actions
router.post("/", createPlans);
router.get("/", getAllPlans);
//router.get("/:id", getPlansById);
router.delete("/:id", deleteAPlans);
router.put("/:id", updateAPlans);
// Add more routes as needed

module.exports = router;
