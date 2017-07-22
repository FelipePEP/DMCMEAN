
console.log('config/routes');
const encounter = require('../controllers/encounter');
const critical = require('../controllers/critical');

module.exports = (app) => {
    app.get('/encounter', encounter.default);
    app.get('/critical', critical.default);
    app.get('/criticalRandom', critical.random);
};