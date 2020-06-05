const app = require('./app');

require('./database');

app.listen(process.env.SERVER_PORT || 3000, function() {
    console.log('Servidor está rodando');
});