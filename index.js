require("dotenv").config(); // Load environment variables from .env file
//const User = require("./models/user");
//const { Sequelize } = require("sequelize");
// models/user.js
//const { DataTypes } = require("sequelize");
//const sequelize = require("./config/config"); // Correct import statement

//module.exports = User;

const express = require("express");
// ...
const app = express();
const userRoutes = require("./routes/userRoutes"); // Import your user routes
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use(express.json());

// Use the user routes
app.use("/api/users", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);
// You can specify a prefix like '/api'

const PORT = process.env.PORT || 3000;
// Object.keys(models).forEach((modelName) => {
//   if ("associate" in models[modelName]) {
//     models[modelName].associate(models);
//   }
// });
// sequelize.sync().then(() => {
//   console.log("Database and tables are synchronized");
// });
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//module.exports = sequelize;
