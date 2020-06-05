const MembroFamilia = require('../models/MembroFamilia');
const TipoMembro = require('../models/TipoMembro');
const Pessoa = require('../models/Pessoa');

module.exports = {

    async index(req, res) {
        const enderecosPessoas = await EnderecoPessoa.findAll();

        return res.json(enderecosPessoas);
    },

    async store(req, res) {
        const { tipo_membro_id, pessoa_id, pessoa_membro_id } = req.body;

        const tipoMembro = await TipoMembro.findByPk(tipo_membro_id);

        if (!tipoMembro) {
            return res.status(400).json({ error: 'TipoMembro not found' });
        }

        const pessoa = await Pessoa.findByPk(pessoa_id);

        if (!pessoa) {
            return res.status(400).json({ error: 'Pessoa not found' });
        }

        const pessoaMembro = await Pessoa.findByPk(pessoa_membro_id);

        if (!pessoaMembro) {
            return res.status(400).json({ error: 'PessoaMembro not found' });
        }

        const membroFamilia = await MembroFamilia.create({
            tipo_membro_id, pessoa_id, pessoa_membro_id
        });

        return res.json(membroFamilia);
    }

}