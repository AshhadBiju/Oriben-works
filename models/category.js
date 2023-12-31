'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    
    static associate(models) {
     
    }
  }
  Category.init({
    categoryname: DataTypes.STRING,
    imageURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};