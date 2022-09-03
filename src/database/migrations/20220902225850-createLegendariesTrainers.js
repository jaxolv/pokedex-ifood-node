'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('legendaries_trainers', {
      id: {},
      legendaryId: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4
      },
      trainerId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: "legendaries",
            schema: "schema"
          },
          model: {
            tableName: "trainers",
            schema: "schema"
          },
          key: "id"
        },
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.dropTable('legendaries_trainers');
  }
};
