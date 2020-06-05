<h1 align="center">
  Sistema de Auxílio de Assistência Social
</h1>

<p align="center">
Software para organização do sistema proposto em computador e sociedade.
</p>

<h4 align="center">
  Links Úteis
</h4>

<p align="center">
  <a href="https://github.com/MisterDaniels/sistema-auxilio-assistencia-social/issues">ISSUES</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/MisterDaniels/sistema-auxilio-assistencia-social/pulls">PULL REQUESTS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/MisterDaniels/sistema-auxilio-assistencia-social/projects">PROJECT BOARD</a>
</p>

# Guias

## Ligar aplicação

### 1ª Opção (PRODUÇÃO) - Como rodar infra

- Primeiro, adicione um arquivo chamado ```.env``` e siga o ```.env.exemplo``` ou o exemplo abaixo, com os dados do seu ambiente.
``` javascript
SERVER_PORT=3000 # Porta servidor
DB_HOST=localhost # Local banco
DB_USER=root # Usuário banco
DB_PASS=root # Senha do usuário acima banco
DB_NAME=assistencia-social # Nome do banco (não precisa estar criado)
```

- Agora, rode o comando para subir a infra em ```Docker```
``` bash 
docker-compose up
```

- Pronto, deve estar tudo certo :grin:

### 2ª Opção (DESENVOLVIMENTO) - Como rodar aplicações separadas (não precisa subir infra, citado acima)
- Primeiro, adicione um arquivo chamado ```.env``` e siga o ```.env.exemplo``` ou o exemplo abaixo, com os dados do seu ambiente.
``` javascript
SERVER_PORT=3000 # Porta servidor
DB_HOST=localhost # Local banco
DB_USER=root # Usuário banco
DB_PASS=root # Senha do usuário acima banco
DB_NAME=assistencia-social # Nome do banco (não precisa estar criado)
```

- Agora, rode o comando ```npm```, que vai subir o banco com os dados do ```.env``` configurado acima e subir as ```migrations``` com os dados do banco.
``` bash 
npm run db:config
```

- Rode o comando ```npm```, que vai instalar as dependências da aplicação.
``` bash
npm install
```

- Agora, é só rodar o comando ```npm```, que vai iniciar o servidor back-end em modo de desenvolvimento.
``` bash
npm run start:dev
```

- Agora é só meter ficha :grin:

## Testar aplicação

### Testar API's

- Adicione no seu ```Postman``` o arquivo ```Sistema Auxílio Assistência Social.postman_collection.json```

- Agora é só se divertir com as API's aí já :grin:
