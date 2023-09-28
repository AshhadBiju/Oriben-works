"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Area.belongsTo(models.User, {
        foreignKey: "id", //foreignKey added here
      });
    }
  }
  Area.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      state: DataTypes.STRING,
      pincode: DataTypes.STRING,
      userID: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Area",
    }
  );
  return Area;
};
