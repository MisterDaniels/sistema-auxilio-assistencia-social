const Beneficio = require('../models/Beneficio');

module.exports = {

    async index(req, res) {
        const beneficios = await Beneficio.findAll();

        return res.json(beneficios);
    },

    async store(req, res) {
        const { descricao } = req.body;

        const beneficio = await Beneficio.create({
            descricao
        });

        return res.json(beneficio);
    }

}