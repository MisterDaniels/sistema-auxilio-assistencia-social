const Endereco = require('../models/Endereco');
const Secretaria = require('../models/Secretaria');
const Telefone = require('../models/Telefone');

module.exports = {

    async get(req, res) {
        const { secretariaId } = req.params;

        const secretaria = await Secretaria.findByPk(secretariaId);

        if (!secretaria) {
            return res.status(400).json({ error: 'Secretaria not found' });
        }

        return res.json(secretaria);
    },

    async list(req, res) {
        const secretarias = await Secretaria.findAll();

        return res.json(secretarias);
    },

    async store(req, res) {
        const { nome, responsavel, cnpj, enderecoId, telefoneId } = req.body;

        const endereco = await Endereco.findByPk(enderecoId);

        if (!endereco) {
            return res.status(400).json({ error: 'Endereco not found' });
        }

        const telefone = await Telefone.findByPk(telefoneId);

        if (!telefone) {
            return res.status(400).json({ error: 'Telefone not found' });
        }

        const secretaria = await Secretaria.create({
            nome, responsavel, cnpj, enderecoId, telefoneId
        });

        return res.json(secretaria);
    }

}