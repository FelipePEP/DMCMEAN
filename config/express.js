console.log('config/express');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const db = 'mongodb://localhost:27017/API';
const app = express();

module.exports = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: 'application/json'}));
    app.set('port', '3000');
    require('./dataBase.js')(db);
    router(app);
    return app;
};