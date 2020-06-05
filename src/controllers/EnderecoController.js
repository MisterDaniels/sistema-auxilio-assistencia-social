const Endereco = require('../models/Endereco');

module.exports = {

    async get(req, res) {
        const { enderecoId } = req.params;

        const endereco = await Endereco.findByPk(enderecoId);

        if (!endereco) {
            return res.status(400).json({ error: 'Endereco not found' });
        }

        return res.json(endereco);
    },

    async list(req, res) {
        const enderecos = await Endereco.findAll();

        return res.json(enderecos);
    },

    async store(req, res) {
        const { logradouro, numero, bairro, cep, cidade, estado } = req.body;

        const endereco = await Endereco.create({
            logradouro, numero, bairro, cep, cidade, estado
        });

        return res.json(endereco);
    }

}