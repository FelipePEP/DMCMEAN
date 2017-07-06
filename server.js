const app = require('./config/express')();
app.listen(app.get('port'));
module.exports = app;