'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("legendaries", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      heathlPoints: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      specialAttack: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      defensa: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      healthPoints: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      experience: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      specialDefense: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("legendaries")
  }
};
