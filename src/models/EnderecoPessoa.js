const { Model, DataTypes } = require('sequelize');

class EnderecoPessoa extends Model {
    static init(sequelize) {
        super.init({
            ativo: DataTypes.BOOLEAN
        }, {
            sequelize,
            tableName: 'endereco_pessoa'
        });
    }

    static associate(models) {
        this.belongsTo(models.Endereco, { foreignKey: 'enderecoId', as: 'endereco' });
        this.belongsTo(models.Pessoa, { foreignKey: 'pessoaId', as: 'pessoa' });
    }
}

module.exports = EnderecoPessoa;