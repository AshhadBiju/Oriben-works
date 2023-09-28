'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Collection.hasMany(models.User, {
        foreignKey: "id", //foreignKey added here
      });
      Collection.hasMany(models.Customer, {
        foreignKey: "customerID", //foreignKey added here
      });
    }
  }
  Collection.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    amount: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.STRING,
    customerID: DataTypes.UUID,
    userID: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Collection',
  });
  return Collection;
};