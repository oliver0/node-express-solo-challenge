var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var index = require('./public/routes/index');
var jokes = require('./public/routes/jokes');

// initial jokes provided by the client


app.use(bodyParser.urlencoded({extended: true}));

app.use('/jokes', jokes);
// Static Files
app.use('/', index);


app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('Server is listening on port ' + app.get('port'));
});
