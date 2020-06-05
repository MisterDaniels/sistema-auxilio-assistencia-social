const TipoMembro = require('../models/TipoMembro');

module.exports = {

    async index(req, res) {
        const tiposMembros = await TipoMembro.findAll();

        return res.json(tiposMembros);
    },

    async store(req, res) {
        const { descricao } = req.body;

        const tipoMembro = await TipoMembro.create({
            descricao
        });

        return res.json(tipoMembro);
    }

}