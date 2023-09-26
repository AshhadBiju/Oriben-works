// controllers/ProductController.js
const { Product } = require("../models");
//const sequelize = require("../config/config"); // Import the Sequelize instance

const createProduct = async (req, res) => {
  try {
    const { productname, price, country, customerid } = req.body;
    const newProduct = await Product.create({
      productname,
      price,
      country,
      customerid,
    });
    res.status(201).json(newProduct);
    console.log("Product created:", newProduct.toJSON());
  } catch (error) {
    console.error("Error creating Product:", error);
    res.status(500).json({ error: "Failed to create Product" });
  }
};
// Add more controller methods as needed
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!Product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching Product:", error);
    res.status(500).json({ error: "Failed to fetch Product" });
  }
};
const getAllProduct = async (req, res) => {
  try {
    const product = await Product.findAll();
    // if (!Product) {
    //   return res.status(404).json({ error: "Product not found" });
    // }
    res.json(product);
  } catch (error) {
    console.error("Error fetching Product:", error);
    res.status(500).json({ error: "Failed to fetch Product" });
  }
};
const deleteAProduct = async (req, res) => {
  try {
    const id = req.params.id;
    //const {name,address,email,phonenumber}=req.bo
    const product = await Product.destroy({
      where: {
        id: id,
      },
    });
    res.json(product);
    console.log("DELETED PRODUCT");
  } catch (error) {
    console.error("Error fetching Product:", error);
    res.status(500).json({ error: "Failed to fetch Product" });
  }
};
// Add more controller methods as needed
const updateAProduct = async (req, res) => {
  try {
    const id = req.params.id;
    //const {name,address,email,phonenumber}=req.bo
    const product = await Product.update(req.body, {
      where: {
        id: id,
      },
    });
    // const Product= await Product.findOneAndUpdate({})
    // if (!Product) {
    //   return res.status(404).json({ error: "Product not found" });
    // }
    res.json(product);
  } catch (error) {
    console.error("Error fetching Product:", error);
    res.status(500).json({ error: "Failed to fetch Product" });
  }
};
// Add more controller methods as needed

module.exports = {
  createProduct,
  getProductById,
  getAllProduct,
  deleteAProduct,
  updateAProduct,
};
//createProduct();
