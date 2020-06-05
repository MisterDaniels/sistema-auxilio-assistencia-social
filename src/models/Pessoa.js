const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model {
    static init(sequelize) {
        super.init({
            cpf: DataTypes.BIGINT,
            nome: DataTypes.STRING,
            dataNasc: DataTypes.DATE,
            rg: DataTypes.BIGINT
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Telefone, { foreignKey: 'telefoneId', as: 'telefone' });
        this.belongsToMany(models.Endereco, { 
            foreignKey: 'pessoa_id', 
            through: 'endereco_pessoa',
            as: 'enderecos' 
        });
    }
}

module.exports = Pessoa;