"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Product.belongsTo(models.User, {
        foreignKey: "id", //foreignKey added here
      });
    }
  }

  Customer.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      name: DataTypes.STRING,
      mobileNumber: DataTypes.STRING,
      registerNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      userID: DataTypes.STRING,
      areaID: DataTypes.STRING,
      planID: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
