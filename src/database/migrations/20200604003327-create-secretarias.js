'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('secretarias', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      responsavel: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cnpj: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      endereco_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'enderecos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    return queryInterface.dropTable('secretarias');
  }
};