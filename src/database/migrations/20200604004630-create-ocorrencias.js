'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ocorrencias', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
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
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo_ocorrencia_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tipo_ocorrencia',
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
    return queryInterface.dropTable('ocorrencias');
  }
};