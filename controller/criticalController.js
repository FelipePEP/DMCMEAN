const Critical = require('../business/critical');

module.exports = {
    default: (req,res)=>{
        let param = req.query;
        res.send(new Critical(param.type,param.brutality).loadAll());
    }   
}