var express = require('express');
var app = express();

var pg = require('pg');

var queries = require('./queries');

// Database sample call
app.get('/insertpost', function (request, response) {

  	//parameter = ["1","Isaac69","McDicks","May contain nuts","ECS 125","111","222","A"];
	console.log(request);  
	var parsed    = JSON.parse(request);
	var parameter = [];

	for(var i in parsed) {
		parameter.push(parsed[i]);
	}
  	queryNum = 7;
  	queries.query(pg, parameter,queryNum, function(err, result){
    if (err) {
		console.log("error", error);
    } else {
        response.render('pages/db', {results: result});
    }  
  });
});

app.get('/delete', function (request, response) {
  	//parameter = ["1","Isaac69","McDicks","May contain nuts","ECS 125","111","222","A"];
	console.log(request);  
	
	var parsed    = JSON.parse(request);
	var parameter = [];

	for(var i in parsed) {
		parameter.push(parsed[i]);
	}
  	queryNum = 6;
  	queries.query(pg, parameter,queryNum, function(err, result){
    if (err) {
		console.log("error", error);
    } else {
        response.render('pages/db', {results: result});
    }  
  });
});


/*
//delete post from tables based on post_id
app.get('/db', function (request, response) {
  parameter = ["1","Isaac69","McDicks","May contain nuts","ECS 125","111","222","A"];
  queryNum = 7;
  queries.query(pg, parameter,queryNum, function(err, result){
    if (err) {
        console.log("error", error);
    } else {
        response.render('pages/deletepost', {results: result});
    }  
  });
});
*/

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


