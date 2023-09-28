require("dotenv").config();

const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes"); // Import your user routes
const plansRoutes = require("./routes/plansRoutes");
const customerRoutes = require("./routes/customerRoutes");
const collectionRoutes = require("./routes/collectionRoutes");
const areaRoutes = require("./routes/areaRoutes");

app.use(express.json());

// Use the user routes
app.use("/api/users", userRoutes);
app.use("/api/plans", plansRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/collection", collectionRoutes);
app.use("/api/area", areaRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
