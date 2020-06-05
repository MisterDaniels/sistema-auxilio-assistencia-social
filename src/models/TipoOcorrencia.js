const { Model, DataTypes } = require('sequelize');

class TipoOcorrencia extends Model {
    static init(sequelize) {
        super.init({
            ocorrencia: DataTypes.STRING
        }, {
            sequelize
        });
    }
}

module.exports = TipoOcorrencia;