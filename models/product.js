"use strict";
const { Model } = require("sequelize");
const { User } = require("./user");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // define association here
      Product.belongsTo(models.User, {
        foreignKey: "id",
      });
    }
  }
  Product.init(
    {
      productname: DataTypes.STRING,
      price: DataTypes.STRING,
      country: DataTypes.STRING,
      customerid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
