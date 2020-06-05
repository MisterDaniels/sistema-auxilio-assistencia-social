const TipoOcorrencia = require('../models/TipoOcorrencia');

module.exports = {

    async get(req, res) {
        const { tipoOcorrenciaId } = req.params;

        const tipoOcorrencia = await TipoOcorrencia.findByPk(tipoOcorrenciaId);

        if (!tipoOcorrencia) {
            return res.status(400).json({ error: 'TipoOcorrencia not found' });
        }

        return res.json(tipoOcorrencia);
    },

    async list(req, res) {
        const tiposOcorrencias = await TipoOcorrencia.findAll();

        return res.json(tiposOcorrencias);
    },

    async store(req, res) {
        const { ocorrencia } = req.body;

        const [ tipoOcorrencia ] = await TipoOcorrencia.findOrCreate({
            where: { ocorrencia }
        });

        return res.json(tipoOcorrencia);
    }

}