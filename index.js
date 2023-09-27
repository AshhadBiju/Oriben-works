require("dotenv").config();

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes"); // Import your user routes
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use(express.json());

// Use the user routes
app.use("/api/users", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
