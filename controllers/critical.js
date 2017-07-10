const Critical = require('../business/critical');

module.exports  = {
    default: async (req,res) => {
        const param = req.query;
        return res.json({data: await new Critical(param.type, param.brutality).loadAll()})
    }   
}