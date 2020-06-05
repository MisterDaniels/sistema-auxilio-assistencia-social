'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pessoas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cpf: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_nasc: {
        type: Sequelize.DATE,
        allowNull: false
      },
      rg: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      telefone_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'telefones',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    return queryInterface.dropTable('pessoas');
  }
};