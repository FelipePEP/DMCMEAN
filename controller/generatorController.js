const GeneratorService = require('../business/generator');

module.exports = {
    default: (req, res) => {
        let param = req.query;
        res.send(new GeneratorService(param.type,param.enviroment,param.hour,param.distance));
    }
}