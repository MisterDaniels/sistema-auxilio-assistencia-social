var express = require('express');
var router = express.Router();
const { celebrate, Joi, errors, Segments } = require('celebrate');

const EnderecoController = require('./controllers/EnderecoController');
const AdministradorController = require('./controllers/AdministradorController');
const PessoaController = require('./controllers/PessoaController');
const TelefoneController = require('./controllers/TelefoneController');
const TipoOcorrenciaController = require('./controllers/TipoOcorrenciaController');
const OcorrenciaController = require('./controllers/OcorrenciaController');
const SecretariaController = require('./controllers/SecretariaController');
const EnderecoPessoaController = require('./controllers/EnderecoPessoaController');

router.get('/endereco', EnderecoController.list);

router.get('/endereco/:enderecoId', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        enderecoId: Joi.number().required()
    })
}), EnderecoController.get);

router.post('/endereco', celebrate({
    [Segments.BODY]: Joi.object().keys({
        logradouro: Joi.string().required(),
        numero: Joi.number().required(),
        bairro: Joi.string().required(),
        cep: Joi.number().required(),
        cidade: Joi.string().required(),
        estado: Joi.string().length(2).required()
    })
}), EnderecoController.store);

router.get('/administrador', AdministradorController.list);

router.get('/administrador/:administradorId', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        administradorId: Joi.number().required()
    })
}), AdministradorController.get);

router.post('/:pessoaId/administrador', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        pessoaId: Joi.number().required()
    })
}), AdministradorController.store);

router.get('/pessoa', PessoaController.list);

router.get('/pessoa/:pessoaId', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        pessoaId: Joi.number().required()
    })
}), PessoaController.get);

router.post('/pessoa', celebrate({
    [Segments.BODY]: Joi.object().keys({
        cpf: Joi.number().required(),
        nome: Joi.string().required(),
        dataNasc: Joi.date().required(),
        rg: Joi.number().required(),
        telefoneId: Joi.number().required()
    })
}), PessoaController.store);

router.get('/telefone', TelefoneController.list);

router.get('/telefone/:telefoneId', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        telefoneId: Joi.number().required()
    })
}), TelefoneController.get);

router.post('/telefone', celebrate({
    [Segments.BODY]: Joi.object().keys({
        ddd: Joi.number().required(),
        numero: Joi.number().required()
    })
}), TelefoneController.store);

router.get('/tipoOcorrencia', TipoOcorrenciaController.list);

router.get('/tipoOcorrencia/:tipoOcorrenciaId', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        tipoOcorrenciaId: Joi.number().required()
    })
}), TipoOcorrenciaController.get);

router.post('/tipoOcorrencia', celebrate({
    [Segments.BODY]: Joi.object().keys({
        ocorrencia: Joi.string().required()
    })
}), TipoOcorrenciaController.store);

router.get('/secretaria', SecretariaController.list);

router.get('/secretaria/:secretariaId', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        secretariaId: Joi.number().required()
    })
}), SecretariaController.get);

router.post('/secretaria', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        responsavel: Joi.string().required(),
        cnpj: Joi.number().required(),
        enderecoId: Joi.number().required(),
        telefoneId: Joi.number().required()
    })
}), SecretariaController.store);

router.get('/enderecoPessoa/endereco/:enderecoId', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        enderecoId: Joi.number().required()
    })
}), EnderecoPessoaController.getByEndereco);

router.get('/enderecoPessoa/pessoa/:pessoaId', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        pessoaId: Joi.number().required()
    })
}), EnderecoPessoaController.getByPessoa);

router.post('/enderecoPessoa', celebrate({
    [Segments.BODY]: Joi.object().keys({
        enderecoId: Joi.number().required(),
        pessoaId: Joi.number().required(),
        ativo: Joi.boolean(),
    })
}), EnderecoPessoaController.store);

module.exports = router;