const Ocorrencia = require('../models/Ocorrencia');
const TipoOcorrencia = require('../models/TipoOcorrencia');

module.exports = {

    async getByTipoOcorrencia(req, res) {
        const { pessoaId } = req.params;

        const pessoa = await Pessoa.findByPk(pessoaId);

        if (!pessoa) {
            return res.status(400).json({ error: 'Pessoa not found' });
        }

        const enderecoPessoa = await EnderecoPessoa.findAll({
            where: {
                pessoaId: pessoaId
            }
        });

        return res.json(enderecoPessoa);
    },

    async list(req, res) {
        const ocorrencias = await Ocorrencia.findAll();

        return res.json(ocorrencias);
    },

    async store(req, res) {
        const { pessoaId, descricao, tipoOcorrenciaId } = req.body;

        const pessoa = await Pessoa.findByPk(pessoaId);

        if (!pessoa) {
            return res.status(400).json({ error: 'Pessoa not found' });
        }

        const tipoOcorrencia = await TipoOcorrencia.findByPk(tipoOcorrenciaId);

        if (!tipoOcorrencia) {
            return res.status(400).json({ error: 'TipoOcorrencia not found' });
        }

        const ocorrencia = await Ocorrencia.create({
            pessoaId, descricao, tipoOcorrenciaId
        });

        return res.json(ocorrencia);
    }

}