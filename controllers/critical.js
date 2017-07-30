console.log('controller/critical');
const business = require('../business/critical');

module.exports = {

    default: async (req, res) => {
        const param = req.query;
        let criticals = await new business(param.type, param.brutality).loadAll();
        criticals = JSON.stringify(criticals);
        res.setHeader('Access-Control-Allow-Origin','*');
        res.send(criticals);
        //res.json({ data: await new business(param.type, param.brutality).loadAll() });
    },
    random: async (req, res) => {
        const param = req.query;
        const critical = await new business(param.type, param.brutality).random(); //await new business(param.type, param.brutality).loadAll();
        res.send(critical.description);
    }
};

