const { Category } = require("../models");
const path = require("path");
const createCategory = async (req, res) => {

  try {

    const { categoryname } = req.body;
    
    const imageName = req.file.originalname;
    const imageURL = path.join("public/image/", imageName);

    const newCategory = await Category.create({
      categoryname,
      imageURL,
    });
    res.status(201).json(newCategory);
    console.log("Category created:", newCategory.toJSON());
  } catch (error) {
    console.error("Error creating Category:", error);
    res.status(500).json({ error: "Failed to create Category" });
  }
};
/**
const getAllCategory = async (req, res) => {
  try {
    const Category = await Category.findAll();
    // if (!Category) {
    //   return res.status(404).json({ error: "Category not found" });
    // }
    res.json(Category);
  } catch (error) {
    console.error("Error fetching Category:", error);
    res.status(500).json({ error: "Failed to fetch Category" });
  }
};
const deleteACategory = async (req, res) => {
  try {
    const id = req.params.id;
    //const {name,address,email,phonenumber}=req.bo
    const Category = await Category.destroy({
      where: {
        id: id,
      },
    });
    res.json(Category);
    console.log("DELETED Category");
  } catch (error) {
    console.error("Error fetching Category:", error);
    res.status(500).json({ error: "Failed to fetch Category" });
  }
};
**/
module.exports = {
  createCategory,
  //deleteACategory,
};
