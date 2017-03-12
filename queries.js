var QUERY_STRING = { 
	0:'SELECT * FROM users;', 
	1:'SELECT * FROM posts;'
};



module.exports = {
	query: function (pg, parameter, queryNum, callback) {
		pg.connect(process.env.DATABASE_URL, function(err, client, done) {
			
			client.query('SELECT * FROM users;', function(err, result) {
				done();
				result.rows.forEach(function(x){
					console.log(x.email);
				})
				if (err){ 
					console.error(err); 
					return;
				}
				callback(null, result);
			});
		});
	}
};

var zemba = function () {
}

// app.get('/db', function (request, response) {
//  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//    client.query('SELECT * FROM users;', function(err, result) {
//      done();
//      if (err)
//       { console.error(err); response.send("Error " + err); }
//      else
//       { response.render('pages/db', {results: result.rows} ); }
//    });
//  });
// });