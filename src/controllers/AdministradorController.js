const Pessoa = require('../models/Pessoa');
const Administrador = require('../models/Administrador');

module.exports = {

    async get(req, res) {
        const { administradorId } = req.params;

        const administrador = await Administrador.findByPk(administradorId);

        if (!administrador) {
            return res.status(400).json({ error: 'Administrador not found' });
        }

        return res.json(administrador);
    },

    async list(req, res) {
        const administradores = await Administrador.findAll();

        return res.json(administradores);
    },

    async store(req, res) {
        const { pessoaId } = req.params;

        const pessoa = await Pessoa.findByPk(pessoaId);

        if (!pessoa) {
            return res.status(400).json({ error: 'Pessoa not found' });
        }

        const administrador = await Administrador.create({
            pessoaId
        });

        return res.json(administrador);
    }

}