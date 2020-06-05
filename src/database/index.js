const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const Administrador = require('../models/Administrador');
const Beneficiario = require('../models/Beneficiario');
const Beneficio = require('../models/Beneficio');
const BeneficiosBeneficiario = require('../models/BeneficiosBeneficiario');
const Endereco = require('../models/Endereco');
const EnderecoPessoa = require('../models/EnderecoPessoa');
const MembroFamilia = require('../models/MembroFamilia');
const Ocorrencia = require('../models/Ocorrencia');
const Pessoa = require('../models/Pessoa');
const Secretaria = require('../models/Secretaria');
const ServidorPublico = require('../models/ServidorPublico');
const Telefone = require('../models/Telefone');
const TipoMembro = require('../models/TipoMembro');
const TipoOcorrencia = require('../models/TipoOcorrencia');

const connection = new Sequelize(dbConfig);

Administrador.init(connection);
Beneficiario.init(connection);
Beneficio.init(connection);
BeneficiosBeneficiario.init(connection);
Endereco.init(connection);
EnderecoPessoa.init(connection);
MembroFamilia.init(connection);
Ocorrencia.init(connection);
Pessoa.init(connection);
Secretaria.init(connection);
ServidorPublico.init(connection);
Telefone.init(connection);
TipoMembro.init(connection);
TipoOcorrencia.init(connection);

Administrador.associate(connection.models);
Beneficiario.associate(connection.models);
BeneficiosBeneficiario.associate(connection.models);
EnderecoPessoa.associate(connection.models);
MembroFamilia.associate(connection.models);
Ocorrencia.associate(connection.models);
Pessoa.associate(connection.models);
Secretaria.associate(connection.models);
ServidorPublico.associate(connection.models);

module.exports = connection;