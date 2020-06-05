'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('beneficios_beneficiario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      beneficio_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'beneficios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      beneficiario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'beneficiarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      servidor_publico_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'servidor_publico',
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
    return queryInterface.dropTable('beneficios_beneficiario');
  }
};