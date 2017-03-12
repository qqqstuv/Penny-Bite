

module.exports = {
	query: function (pg) {
		pg.connect(process.env.DATABASE_URL, function(err, client, done) {
			client.query('SELECT * FROM users;', function(err, result) {
			done();
			console.log("RESULT IN QUERIES " + result);
			if (err){ 
				console.error(err); 
				// response.send("Error " + err); 
				return null;
			}else{
				return result;
			}
			});
		});
	}
};

var zemba = function () {
}