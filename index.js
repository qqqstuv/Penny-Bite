var express = require('express');
var app = express();

var pg = require('pg');

var queries = require('./queries');

// Database sample call
app.get('/db', function (request, response) {
  var result = queries.query(pg);
  if(result != null){
    response.render('pages/db', {results: result.rows} );
  }
});













/* Example of a call to database. More info at: https://devcenter.heroku.com/articles/heroku-postgresql#local-setup

pg.defaults.ssl = true;
pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});

*/
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


