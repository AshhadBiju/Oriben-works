'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plans extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Plans.belongsTo(models.User, {
        foreignKey: "id", //foreignKey added here
      });
      Plans.belongsTo(models.Customer, {
        foreignKey: "userID", //foreignKey added here
      });
    }
  }
  Plans.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    planName: DataTypes.STRING,
    imageURL: DataTypes.STRING,
    price: DataTypes.INTEGER,
    userID: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Plans',
  });
  return Plans;
};