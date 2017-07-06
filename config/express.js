let express = require('express');
let bodyParser = require('body-parser');
let router = require('../routes/config');

module.exports = function(){    
    const app = express(); 
    app.use(bodyParser.json());                                     
    app.use(bodyParser.urlencoded({extended: true}));               
    app.use(bodyParser.text());                                    
    app.use(bodyParser.json({ type: 'application/json'}));     
    app.set('port','3000');
    router(app);
    return app;
};