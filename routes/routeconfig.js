const generatorController = require('../controller/generatorController');

module.exports = (app) => {      
    app.get('/generator', generatorController.generic);          
};