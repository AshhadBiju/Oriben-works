const dotenv = require("dotenv"); // Import dotenv for environment variables
const { Sequelize } = require("sequelize");

// Create a Sequelize instance
const sequelize = new Sequelize("database_name", "username", "password", {
  host: "localhost",
  dialect: "postgres", // or your database dialect
});

module.exports = sequelize;

dotenv.config(); // Load environment variables from a .env file if present

module.exports = {
  development: {
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "2000",
    database: process.env.DB_NAME || "demo-api",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME || "your_username",
    password: process.env.DB_PASSWORD || "your_password",
    database: process.env.DB_NAME || "your_database",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME || "your_username",
    password: process.env.DB_PASSWORD || "your_password",
    database: process.env.DB_NAME || "your_database",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
  },
};
