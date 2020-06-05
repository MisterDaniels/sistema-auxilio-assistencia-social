const { Model } = require('sequelize');

class MembroFamilia extends Model {
    static init(sequelize) {
        super.init({ }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_id', as: 'pessoa' });
        this.belongsTo(models.Pessoa, { foreignKey: 'pessoa_membro_id', as: 'pessoa_membro' });
    }
}

module.exports = MembroFamilia;