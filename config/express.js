console.log('config/express');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const db = 'mongodb://heroku_dplx7nhl:mlab*123@ds141950.mlab.com:41950/heroku_dplx7nhl'; //'mongodb://localhost:27017/API');
const app = express();

module.exports = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.text());
    app.use(bodyParser.json({ type: 'application/json'}));
    app.set('port', (process.env.PORT || 5000));
    require('./dataBase.js')(db);
    router(app);
    return app;
};