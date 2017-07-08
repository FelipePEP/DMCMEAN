const generatorController = require('../controller/generatorController');
const criticalController = require('../controller/criticalController');

module.exports = (app) => {      
    app.get('/generator', generatorController.default);              
    app.get('/critical', criticalController.default);              
};