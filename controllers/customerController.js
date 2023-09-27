// controllers/CustomerController.js
const { Model } = require("sequelize");
const models = require("../models");
const { Customer } = require("../models");
//const sequelize = require("../config/config"); // Import the Sequelize instance

const createCustomer = async (req, res) => {
  try {
    const { name, mobileNumber, registerNumber, address, userID, areaID, planID } = req.body;
    const newCustomer = await Customer.create({ name, mobileNumber, registerNumber, address, userID, areaID, planID });
    res.status(201).json(newCustomer);
    console.log("Customer created:", newCustomer.toJSON());
  } catch (error) {
    console.error("Error creating Customer:", error);
    res.status(500).json({ error: "Failed to create Customer" });
  }
};
// Add more controller methods as needed
const getCustomerById = async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findByPk(customerId);
    if (!customer) {
      return res.status(404).json({ error: "Customer not found" });
    }
    res.json(customer);
  } catch (error) {
    console.error("Error fetching Customer:", error);
    res.status(500).json({ error: "Failed to fetch Customer" });
  }
};
const getAllCustomer = async (req, res) => {
  try {
    const customer = await Customer.findAll();
    res.json(customer);
  } catch (error) {
    console.error("Error fetching Customer:", error);
    res.status(500).json({ error: "Failed to fetch Customer" });
  }
};
const deleteACustomer = async (req, res) => {
  try {
    const id = req.params.id;
    //const {name,address,email,mobileNumber}=req.bo
    const customer = await Customer.destroy({
      where: {
        id: id,
      },
    });
    //res.json(Customer);
    res.status(200).json({ message: "deleted Customer" });
  } catch (error) {
    console.error("Error fetching Customer:", error);
    res.status(500).json({ error: "Failed to fetch Customer" });
  }
};
const updateACustomer = async (req, res) => {
  try {
    const id = req.params.id;
    //const {name,address,email,mobileNumber}=req.bo
    const customer = await Customer.update(req.body, {
      where: {
        id: id,
      },
    });
    // const Customer= await Customer.findOneAndUpdate({})
    // if (!Customer) {
    //   return res.status(404).json({ error: "Customer not found" });
    // }
    res.json(customer);
  } catch (error) {
    console.error("Error fetching Customer:", error);
    res.status(500).json({ error: "Failed to fetch Customer" });
  }
};

module.exports = {
  createCustomer,
  getCustomerById,
  getAllCustomer,
  deleteACustomer,
  updateACustomer,
};
//createCustomer();
