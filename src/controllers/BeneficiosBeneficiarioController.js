const BeneficiosBeneficiario = require('../models/BeneficiosBeneficiario');
const Beneficio = require('../models/Beneficio');
const Beneficiario = require('../models/Beneficiario');
const ServidorPublico = require('../models/ServidorPublico');

module.exports = {

    async index(req, res) {
        const beneficiosBeneficiario = await BeneficiosBeneficiario.findAll();

        return res.json(beneficiosBeneficiario);
    },

    async store(req, res) {
        const { beneficioId, beneficiarioId, servidorPublicoId } = req.body;
        
        const beneficio = await Beneficio.findByPk(beneficioId);

        if (!beneficio) {
            return res.status(400).json({ error: 'Beneficio not found' });
        }

        const beneficiario = await Beneficiario.findByPk(beneficiarioId);

        if (!beneficiario) {
            return res.status(400).json({ error: 'Beneficiario not found' });
        }

        const servidorPublico = await ServidorPublico.findByPk(servidorPublicoId);

        if (!servidorPublico) {
            return res.status(400).json({ error: 'ServidorPublico not found' });
        }

        const beneficiosBeneficiario = await BeneficiosBeneficiario.create({
            beneficioId, beneficiarioId, servidorPublicoId
        });

        return res.json(beneficiosBeneficiario);
    }

}