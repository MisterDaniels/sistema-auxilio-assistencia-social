const { Model, DataTypes } = require('sequelize');

class Secretaria extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            responsavel: DataTypes.STRING,
            cnpj: DataTypes.BIGINT
        }, {
            sequelize,
            tableName: 'secretarias'
        });
    }

    static associate(models) {
        this.belongsTo(models.Endereco, { foreignKey: 'enderecoId', as: 'endereco' });
        this.belongsTo(models.Telefone, { foreignKey: 'telefoneId', as: 'telefone' });
    }
}

module.exports = Secretaria;