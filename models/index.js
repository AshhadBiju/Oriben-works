const Sequelize = require("sequelize");
const { development } = require("../config/config");

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  development
);

const models = {
  sequelize,
  Sequelize,
  User: require("./user")(sequelize, Sequelize.DataTypes),
  Plans: require("./plans")(sequelize, Sequelize.DataTypes),
  Collection: require("./collection")(sequelize, Sequelize.DataTypes),
  Area: require("./area")(sequelize, Sequelize.DataTypes),
  Customer: require("./customer")(sequelize, Sequelize.DataTypes),
  
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = models;