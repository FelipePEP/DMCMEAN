console.log('config/express');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/API';
const app = express();

module.exports = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: 'application/json'}));
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        next();
    });
    app.set('port', (process.env.PORT || 5000));
        require('./dataBase.js')(db);
        router(app);
        return app;
    };