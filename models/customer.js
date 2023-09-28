"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      Customer.belongsTo(models.User, {
        foreignKey: "id", //foreignKey added here
      });
      Customer.belongsTo(models.Area, {
        foreignKey: "id", //foreignKey added here
      });
      Customer.belongsTo(models.Plans, {
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
      userID: DataTypes.UUID,
      areaID: DataTypes.UUID,
      planID: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Customer",
    }
  );
  return Customer;
};
