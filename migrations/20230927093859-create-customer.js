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
        type: Sequelize.UUID,
        allowNull:false,
      },
      areaID: {
        type: Sequelize.UUID,
        allowNull:false,
      },
      planID: {
        type: Sequelize.UUID,
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