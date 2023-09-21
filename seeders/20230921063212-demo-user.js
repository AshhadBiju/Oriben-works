module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("User", [
      {
        name: "John",
        address: "Lisbin",
        email: "example@example.com",
        phonenumber: "839485920",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("User", null, {});
  },
};
