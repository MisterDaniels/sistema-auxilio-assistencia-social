const Beneficiario = require('../models/Beneficiario');
const Pessoa = require('../models/Pessoa');

module.exports = {

    async index(req, res) {
        const beneficiarios = await Beneficiario.findAll();

        return res.json(beneficiarios);
    },

    async store(req, res) {
        const { pessoaId, numeroCtps, senha } = req.body;

        const pessoa = await Pessoa.findByPk(pessoaId);

        if (!pessoa) {
            return res.status(400).json({ error: 'Pessoa not found' });
        }

        const beneficiario = await Beneficiario.create({
            pessoaId, numeroCtps, senha
        });

        return res.json(beneficiario);
    }

}