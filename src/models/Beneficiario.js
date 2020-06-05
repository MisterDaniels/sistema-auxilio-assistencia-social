const { Model, DataTypes } = require('sequelize');

class Beneficiario extends Model {
    static init(sequelize) {
        super.init({
            numeroCtps: DataTypes.INTEGER,
            senha: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa' });
    }
}

module.exports = Beneficiario;