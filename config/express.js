const express = require('express');
const bodyParser = require('body-parser');
const router = require('../routes/routeconfig');
const db = 'mongodb://localhost/DMC';
const app = express(); 

module.exports = () => {        
    app.use(bodyParser.json());                                     
    app.use(bodyParser.urlencoded({extended: true}));               
    app.use(bodyParser.text());                                    
    app.use(bodyParser.json({ type: 'application/json'}));     
    app.set('port','3000');
    router(app);
    require('./dataBase.js')(db);
    return app;
};