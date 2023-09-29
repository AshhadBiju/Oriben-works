// controllers/userController.js
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const models = require("../models");
const { User, Area, Plans } = require("../models");
const jwt=require("jsonwebtoken")
//const sequelize = require("../config/config"); // Import the Sequelize instance

// function authenticateToken(req, res, next) {
//   const tokenb = req.header("Authorization");
//   const token = tokenb.split(" ")[1];
//   console.log(token);
//   if (!token) return res.status(401).json({ error: "Access denied" });

//   jwt.verify(token, "1111", (err, user) => {
//     if (err) return res.status(403).json({ error: "Token is not valid" });
//     req.user = user;
//     next();
//   });
// }
const createUser = async (req, res) => {
  try {
    console.log(`name=${req.body.name}`);
    const { password } = req.body;//password can be took from body
    const hashedPassword = await bcrypt.hash(password, 10);//password is changed to the brcypt version hashedPassword
    req.body.password = hashedPassword;//the password in body is actually hashedPassword
    const newUser = await User.create(req.body);//the rest of the input is took from body
    res.status(200).json(newUser);
    console.log("User created:", newUser.toJSON());
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};
// Add more controller methods as needed
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body; //username and password required in body
    // Find the Userdetails by email
    const user = await User.findOne({ where: { username } }); // find whether username
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log(user.password);
    // Compare the provided password with the stored hash
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }
    // Generate and send a JWT token
    const token = jwt.sign({ userID: user.id }, "1111", {
      expiresIn: "1h",
    });

    res.status(200).json({ token: token, user: user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user details " });
  }
};
const getAllUser = async (req, res) => {
  try {
    const user = await User.findAll({
      include: [{ model: Area }, { model: Plans }],
    });
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
const deleteAUser = async (req, res) => {
  try {
    const id = req.params.id;
    //const {name,address,email,phonenumber}=req.bo
    const user = await User.destroy({
      where: {
        id: id,
      },
    });
    //res.json(user);
    res.status(200).json({ message: "deleted user" });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
const updateAUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.update(req.body, {
      where: {
        id: id,
      },
    });
    res.status(201).json({ message: "Updated User" });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

module.exports = {
  createUser,
  getUserById,
  getAllUser,
  loginUser,
  deleteAUser,
  updateAUser,
};
//createUser();
