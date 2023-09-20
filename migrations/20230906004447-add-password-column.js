"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        "users", //editing table
        "password", //adding column name
        { type: Sequelize.STRING(255) },
        { transaction }
      );
      await transaction.commit();
    } catch (error) {
      await transaction.rollback(); // if this fails. Return to original state
      console.log(error);
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.removeColumn("ws_incidents", "recommendation_file", {
        transaction,
      });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      console.log(error);
    }
  },
};
