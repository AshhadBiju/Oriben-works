const express = require("express");
const app = express();

// Add your routes and middleware here

const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
// const Sequelize = require("sequelize");
// const sequelize = new Sequelize("demo-api", "postgres", "2000", {
//   host: "localhost",
//   dialect: "postgres",
// });
// const { DataTypes } = require("sequelize");

// const User = sequelize.define("User", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true,
//   },
// });

// Add middleware to parse JSON requests
app.use(express.json());
const userRoutes = require("./routes/user"); // Import your routes

// Add middleware to parse JSON requests
app.use(express.json());

// Use your routes
app.use("/api/users", userRoutes); // Use the "/api/users" endpoint for user routes

// Add more routes as needed

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
