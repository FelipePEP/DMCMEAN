const mongoose = require('mongoose');

module.exports = (uri) => {

    mongoose.connect(uri);
    const db = mongoose.connection;

    db.on('connected', () => {
        console.log('Mongoose! Conectado em ' + uri);
    });
    db.on('disconnected', () => {
        console.log('Mongoose! Desconectado de ' + uri);
    });
    db.on('error', () => {
        console.log(`Mongoose! Erro na conexão ${error}`);
    });
    process.on('SIGINT', () => {
        db.close(() => {
            console.log('Mongoose! Conexão encerrada com o término da aplicação.');
            process.exit(0);
        });
    });
    mongoose.set('debug', true);
};