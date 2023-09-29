// controllers/PlansController.js
const { Model } = require("sequelize");
const models = require("../models");
const { Plans } = require("../models");
//const sequelize = require("../config/config"); // Import the Sequelize instance

const createPlans = async (req, res) => {
  try {
    const { planName, imageURL, price, userID } = req.body;
    const newPlans = await Plans.create({ planName, imageURL, price, userID });
    res.status(201).json(newPlans);
    console.log("Plans created:", newPlans.toJSON());
  } catch (error) {
    console.error("Error creating Plans:", error);
    res.status(500).json({ error: "Failed to create Plans" });
  }
};
// Add more controller methods as needed
/**const getPlansById = async (req, res) => {
  try {
    const plansId = req.params.id;
    const plans = await Plans.findByPk(PlansId);
    if (!plans) {
      return res.status(404).json({ error: "Plans not found" });
    }
    res.json(plans);
  } catch (error) {
    console.error("Error fetching Plans:", error);
    res.status(500).json({ error: "Failed to fetch Plans" });
  }
}; **/
const getAllPlans = async (req, res) => {
  try {
    const plans = await Plans.findAll();
    res.json(plans);
  } catch (error) {
    console.error("Error fetching Plans:", error);
    res.status(500).json({ error: "Failed to fetch Plans" });
  }
};
const deleteAPlans = async (req, res) => {
  try {
    const id = req.params.id;
    //const {name,address,email,phonenumber}=req.bo
    const plans = await Plans.destroy({
      where: {
        id: id,
      },
    });
    //res.json(plans);
    res.status(200).json({ message: "deleted Plans" });
  } catch (error) {
    console.error("Error fetching Plans:", error);
    res.status(500).json({ error: "Failed to fetch Plans" });
  }
};
const updateAPlans = async (req, res) => {
  try {
    const id = req.params.id;
    //const {name,address,email,phonenumber}=req.bo
    const plans = await Plans.update(req.body, {
      where: {
        id: id,
      },
    });
    res.status(201).json({ message: "Updated Plans" });
  } catch (error) {
    console.error("Error fetching Plans:", error);
    res.status(500).json({ error: "Failed to fetch Plans" });
  }
};

module.exports = {
  createPlans,
  //getPlansById,
  getAllPlans,
  deleteAPlans,
  updateAPlans,
};
//createPlans();
