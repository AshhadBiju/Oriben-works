'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Collections', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      amount: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      description: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      customerID: {
        type: Sequelize.UUID,
        allowNull:false,
      },
      userID: {
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
    await queryInterface.dropTable('Collections');
  }
};