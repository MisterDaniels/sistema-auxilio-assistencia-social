const { Model } = require('sequelize');

class Ocorrencia extends Model {
    static init(sequelize) {
        super.init({ }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa' });
    }
}

module.exports = Ocorrencia;