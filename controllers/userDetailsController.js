const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { Userdetails } = require("../models");

function authenticateToken(req, res, next) {
  const tokenb = req.header("Authorization");
  const token = tokenb.split(" ")[1];
  console.log(token);
  if (!token) return res.status(401).json({ error: "Access denied" });

  jwt.verify(token, "1111", (err, user) => {
    if (err) return res.status(403).json({ error: "Token is not valid" });
    req.user = user;
    next();
  });
}

// Userdetails registration (sign-up)
const createUserdetails = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new Userdetails in the database
    const newUserdetails = await Userdetails.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json(newUserdetails);
    console.log("New User created:", newUserdetails.toJSON());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Userdetails authentication (login)
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the Userdetails by email
    const userdata = await Userdetails.findOne({ where: { email } });

    if (!userdata) {
      return res.status(404).json({ error: "Userdetails not found" });
    }
    console.log(userdata.password);
    // Compare the provided password with the stored hash
    const passwordMatch = await bcrypt.compare(password, userdata.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Generate and send a JWT token
    const token = jwt.sign({ userdetailsId: userdata.id }, "1111", {
      expiresIn: "1h",
    });

    res.status(200).json({ token: token, user: userdata });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getAllUserDetails = async (req, res) => {
  try {
    const userdata = await Userdetails.findAll();
    // if (!user) {
    //   return res.status(404).json({ error: "User not found" });
    // }
    console.log(userdata);
    //res.json(userdata);
    res.json(userdata);
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ error: "Failed to fetch user details" });
  }
};
module.exports = {
  createUserdetails,
  login,
  authenticateToken,
  getAllUserDetails,
};
