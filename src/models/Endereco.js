const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
    static init(sequelize) {
        super.init({
            logradouro: DataTypes.STRING,
            numero: DataTypes.INTEGER,
            bairro: DataTypes.STRING,
            cep: DataTypes.BIGINT,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsToMany(models.Pessoa, { 
            foreignKey: 'endereco_id', 
            through: 'endereco_pessoa', 
            as: 'pessoas'
        });
    }
}

module.exports = Endereco;