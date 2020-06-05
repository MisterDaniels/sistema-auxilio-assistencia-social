const EnderecoPessoa = require('../models/EnderecoPessoa');
const Endereco = require('../models/Endereco');
const Pessoa = require('../models/Pessoa');

module.exports = {

    async getByEndereco(req, res) {
        const { enderecoId } = req.params;

        const endereco = await Endereco.findByPk(enderecoId);

        if (!endereco) {
            return res.status(400).json({ error: 'Endereco not found' });
        }

        const enderecoPessoa = await EnderecoPessoa.findAll({
            where: {
                enderecoId: enderecoId
            }
        });

        return res.json(enderecoPessoa);
    },

    async getByPessoa(req, res) {
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

    async store(req, res) {
        const { enderecoId, pessoaId, ativo } = req.body;

        const endereco = await Endereco.findByPk(enderecoId);

        if (!endereco) {
            return res.status(400).json({ error: 'Endereco not found' });
        }

        const pessoa = await Pessoa.findByPk(pessoaId);

        if (!pessoa) {
            return res.status(400).json({ error: 'Pessoa not found' });
        }

        const enderecoPessoa = await EnderecoPessoa.create({
            enderecoId, pessoaId, ativo
        });

        return res.json(enderecoPessoa);
    }

}