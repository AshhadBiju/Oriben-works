"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      email: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

// // models/user.js
// const { DataTypes } = require("sequelize");
// const { Sequelize } = require("sequelize");

// const sequelize = require("../config/config.js"); // Import the Sequelize instance

// const User = sequelize.define("User", {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   address: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   phonenumber: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true,
//   },

//   // Add other fields as needed
// });

// module.exports = User;
// //module.exports = sequelize;
