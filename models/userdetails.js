"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Userdetails extends Model {
    static associate(models) {
      // define association here
    }
  }
  Userdetails.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Userdetails",
    }
  );
  return Userdetails;
};
