'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('membro_familia', {
      tipo_membro_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo_membro',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      pessoa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pessoas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      pessoa_membro_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'pessoas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('membro_familia');
  }
};