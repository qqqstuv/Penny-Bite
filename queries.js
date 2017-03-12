

module.exports = {
	query: function (pg) {
		pg.connect(process.env.DATABASE_URL, function(err, client, done) {
			client.query('SELECT * FROM users;', function(err, result) {
				done();
				console.log("RESULT IN QUERIES " + result.rows);
				result.rows.forEach(function(x){
					console.log(x.email);
				})
				if (err){ 
					console.error(err); 
					// response.send("Error " + err); 
					return "is null";
				}else{
					console.log("RESULT IN ELSE QUERIES " + result.rows);
					return (result.rows);
				}
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