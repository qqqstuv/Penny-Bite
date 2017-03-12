

module.exports = {
  query: function (pg, response) {
      pg.connect(process.env.DATABASE_URL, function(err, client, done) {
    	client.query('SELECT * FROM users', function(err, result) {
      	done();
      	if (err){ 
      		console.error(err); response.send("Error " + err); 
      	}else{ 
      		response.render('pages/db', {results: result.rows} );}
	    });
  	});
  }
};

var zemba = function () {
}