const { Model, DataTypes } = require('sequelize');

class ServidorPublico extends Model {
    static init(sequelize) {
        super.init({
            senha: DataTypes.STRING,
            tipoCargo: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Secretaria, { foreignKey: 'secretaria_id', as: 'secretaria' });
    }
}

module.exports = ServidorPublico;