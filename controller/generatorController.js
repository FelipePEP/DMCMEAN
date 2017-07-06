const generatorService = require('../business/generator');
let g = new generatorService();

module.exports = {
    generic: (req, res) => {
        res.send(g.startGenerator());
    },
    teste: (req, res) => {       
        return res.send("teste");//res.send(g.startGenerator(req.body.type));
    }
}