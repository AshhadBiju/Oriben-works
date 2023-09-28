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
      //User.hasMany(models.Customer);
      User.hasMany(models.Area,{foreignKey:"userID"});
      User.hasMany(models.Plans,{foreignKey:"userID"});
      }
  
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
