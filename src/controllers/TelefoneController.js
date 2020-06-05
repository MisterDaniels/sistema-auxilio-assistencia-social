const Telefone = require('../models/Telefone');

module.exports = {

    async get(req, res) {
        const { telefoneId } = req.params;

        const telefone = await Telefone.findByPk(telefoneId);

        if (!telefone) {
            return res.status(400).json({ error: 'Telefone not found' });
        }

        return res.json(telefone);
    },

    async list(req, res) {
        const telefones = await Telefone.findAll();

        return res.json(telefones);
    },

    async store(req, res) {
        const { ddd, numero } = req.body;

        const telefone = await Telefone.create({
            ddd, numero
        });

        return res.json(telefone);
    }

}