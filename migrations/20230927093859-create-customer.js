'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Customers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      mobileNumber: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      registerNumber: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      userID: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      areaID: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      planID: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Customers');
  }
};