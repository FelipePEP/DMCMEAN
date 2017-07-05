const service = require('./services/calculator');
const app = require('./config/express')();
const router = require

/*app.get('/', function(req, res){
    console.log('rodou na porta ' + app.get('port'));
    
})*/

app.listen(app.get('port'));
