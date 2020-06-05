const { Model, DataTypes } = require('sequelize');

class TipoMembro extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING
        }, {
            sequelize
        });
    }
}

module.exports = TipoMembro;