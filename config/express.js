const express = require('express');


module.exports = function(){    
    const app = express();
    
    //variável de ambiente
    app.set('port','3000');
    
    //middleware
    app.use(express.static('./public'))
    
    return app;
};