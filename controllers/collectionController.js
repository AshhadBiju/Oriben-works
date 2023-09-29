// controllers/CollectionController.js
const { Model } = require("sequelize");
const models = require("../models");
const { Collection } = require("../models");
//const sequelize = require("../config/config"); // Import the Sequelize instance

const createCollection = async (req, res) => {
  try {
    const { amount, description, date, customerID, userID} = req.body;
    const newCollection = await Collection.create({ amount, description, date, customerID, userID});
    res.status(201).json(newCollection);
    console.log("Collection created:", newCollection.toJSON());
  } catch (error) {
    console.error("Error creating Collection:", error);
    res.status(500).json({ error: "Failed to create Collection" });
  }
};
// Add more controller methods as needed
const getCollectionById = async (req, res) => {
  try {
    const collectionId = req.params.id;
    const collection = await Collection.findByPk(collectionId);
    if (!Collection) {
      return res.status(404).json({ error: "Collection not found" });
    }
    res.json(collection);
  } catch (error) {
    console.error("Error fetching Collection:", error);
    res.status(500).json({ error: "Failed to fetch Collection" });
  }
};
const getAllCollection = async (req, res) => {
  try {
    const collections = await Collection.findAll();
    res.json(collections);
  } catch (error) {
    console.error("Error fetching Collection:", error);
    res.status(500).json({ error: "Failed to fetch Collection" });
  }
};
const deleteACollection = async (req, res) => {
  try {
    const id = req.params.id;
    const collection = await Collection.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "deleted Collection" });
  } catch (error) {
    console.error("Error fetching Collection:", error);
    res.status(500).json({ error: "Failed to fetch Collection" });
  }
};
const updateACollection = async (req, res) => {
  try {
    const id = req.params.id;
    const collection = await Collection.update(req.body, {
      where: {
        id: id,
      },
    });
    res.status(201).json({ message: "Updated Collection" });
  } catch (error) {
    console.error("Error fetching Collection:", error);
    res.status(500).json({ error: "Failed to fetch Collection" });
  }
};

module.exports = {
  createCollection,
  getCollectionById,
  getAllCollection,
  deleteACollection,
  updateACollection,
};
//createCollection();
