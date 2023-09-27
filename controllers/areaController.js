// controllers/AreaController.js
const { Model } = require("sequelize");
const models = require("../models");
const { Area } = require("../models");
//const sequelize = require("../config/config"); // Import the Sequelize instance

const createArea = async (req, res) => {
  try {
    const { city, district, state, pincode, userID } = req.body;
    const newArea = await Area.create({
      city,
      district,
      state,
      pincode,
      userID,
    });
    res.status(201).json(newArea);
    console.log("Area created:", newArea.toJSON());
  } catch (error) {
    console.error("Error creating Area:", error);
    res.status(500).json({ error: "Failed to create Area" });
  }
};
// Add more controller methods as needed
const getAreaById = async (req, res) => {
  try {
    const areaID = req.params.id;
    const area = await Area.findByPk(areaID);
    if (!area) {
      return res.status(404).json({ error: "Area not found" });
    }
    res.json(area);
  } catch (error) {
    console.error("Error fetching Area:", error);
    res.status(500).json({ error: "Failed to fetch Area" });
  }
};
const getAllArea = async (req, res) => {
  try {
    const area = await Area.findAll();
    res.json(area);
  } catch (error) {
    console.error("Error fetching Area:", error);
    res.status(500).json({ error: "Failed to fetch Area" });
  }
};
const deleteAArea = async (req, res) => {
  try {
    const id = req.params.id;
    //const {city,pincode,email,do
    const area = await Area.destroy({
      where: {
        id: id,
      },
    });
    //res.json(Area);
    res.status(200).json({ message: "deleted Area" });
  } catch (error) {
    console.error("Error fetching Area:", error);
    res.status(500).json({ error: "Failed to fetch Area" });
  }
};
const updateAArea = async (req, res) => {
  try {
    const id = req.params.id;
    //const {city,pincode,email,do
    const area = await Area.upstate(req.body, {
      where: {
        id: id,
      },
    });
    // const Area= await Area.findOneAndUpstate({})
    // if (!Area) {
    //   return res.status(404).json({ error: "Area not found" });
    // }
    res.json(area);
  } catch (error) {
    console.error("Error fetching Area:", error);
    res.status(500).json({ error: "Failed to fetch Area" });
  }
};

module.exports = {
  createArea,
  getAreaById,
  getAllArea,
  deleteAArea,
  updateAArea,
};
//createArea();
