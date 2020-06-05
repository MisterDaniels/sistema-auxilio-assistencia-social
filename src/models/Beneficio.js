const { Model, DataTypes } = require('sequelize');

class Beneficio extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING
        }, {
            sequelize
        });
    }
}

module.exports = Beneficio;