'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ParticipantEvents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ParticipantId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Participants',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      EventId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Events',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      certificate_number: {
        type: Sequelize.STRING
      },
      validFrom: {
        type: Sequelize.DATE
      },
      ValidUntil: {
        type: Sequelize.DATE
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ParticipantEvents');
  }
};