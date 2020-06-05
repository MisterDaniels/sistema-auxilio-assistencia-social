const { Model, DataTypes } = require('sequelize');

class Telefone extends Model {
    static init(sequelize) {
        super.init({
            ddd: DataTypes.INTEGER,
            numero: DataTypes.BIGINT
        }, {
            sequelize
        });
    }
}

module.exports = Telefone;