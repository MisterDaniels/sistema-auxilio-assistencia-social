const Pessoa = require('../models/Pessoa');
const Telefone = require('../models/Telefone');

module.exports = {

    async get(req, res) {
        const { pessoaId } = req.params;

        const pessoa = await Pessoa.findByPk(pessoaId);

        if (!pessoa) {
            return res.status(400).json({ error: 'Pessoa not found' });
        }

        return res.json(pessoa);
    },

    async list(req, res) {
        const pessoas = await Pessoa.findAll();

        return res.json(pessoas);
    },

    async store(req, res) {
        const { cpf, nome, dataNasc, rg, telefoneId } = req.body;

        const telefone = await Telefone.findByPk(telefoneId);

        if (!telefone) {
            return res.status(400).json({ error: 'Telefone not found' });
        }

        const pessoa = await Pessoa.create({
            cpf, nome, dataNasc, rg, telefoneId
        });

        return res.json(pessoa);
    }

}