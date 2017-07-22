
console.log('controller/encounter');
const business = require('../business/encounter');

module.exports = {
    default: (req, res) => {
        const param = req.query;
        res.send(new business(param.type, param.enviroment, param.hour, param.distance));
    }
};