const { Model } = require('sequelize');

class BeneficiosBeneficiario extends Model {
    static init(sequelize) {
        super.init({ }, {
            sequelize
        });
    }

    static associate(models) {
        this.belongsTo(models.Beneficio, { foreignKey: 'beneficio_id', as: 'beneficio' });
        this.belongsTo(models.Beneficiario, { foreignKey: 'beneficiario_id', as: 'beneficiario' });
        this.belongsTo(models.ServidorPublico, { foreignKey: 'servidor_publico_id', as: 'servidor_publico' });
    }
}

module.exports = BeneficiosBeneficiario;