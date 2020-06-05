const ServidorPublico = require('../models/ServidorPublico');
const Secretaria = require('../models/Secretaria');

module.exports = {

    async index(req, res) {
        const servidoresPublicos = await ServidorPublico.findAll();

        return res.json(servidoresPublicos);
    },

    async store(req, res) {
        const { senha, secretariaId, tipoCargo } = req.body;
        
        const secretaria = await Secretaria.findByPk(secretariaId);

        if (!secretaria) {
            return res.status(400).json({ error: 'Secretaria not found' });
        }

        const servidorPublico = await ServidorPublico.create({
            senha, secretariaId, tipoCargo
        });

        return res.json(servidorPublico);
    }

}