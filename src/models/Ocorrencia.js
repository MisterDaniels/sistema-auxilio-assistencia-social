const { Model, DataTypes } = require('sequelize');

class Ocorrencia extends Model {
    static init(sequelize) {
        super.init({
            descricao: DataTypes.STRING
        }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa' });
        this.belongsTo(models.TipoOcorrencia, { foreignKey: 'tipo_ocorrencia_id', as: 'tipo_ocorrencia' });
    }
}

module.exports = Ocorrencia;