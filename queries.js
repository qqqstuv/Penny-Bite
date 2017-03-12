var QUERY_STRING = { 
	0:'SELECT * FROM users;', 
	1:'SELECT * FROM posts;',
	2:'SELECT password FROM users WHERE user_name = $1;',
	3:'SELECT * FROM posts where post_id = $1;',
	4:'INSERT INTO users(user_name, password, email) VALUES( $1, $2, $3);',
	5:'DElETE FROM users WHERE user_name = $1;'
	6:'DELETE FROM posts WHERE post_id = $1;'
	7:'INSERT INTO posts(rating, poster_user_name, title, description,location ) VALUES(DEFAULT, $1, $2, DEFAULT, $3, $4, $5);'
};

module.exports = {
	query: function (pg, parameter, queryNum, callback) {
		pg.connect(process.env.DATABASE_URL, function(err, client, done) {
			var query_string = QUERY_STRING[queryNum];
			if (parameter) {
				client.query(query_string, function(err, result) {
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
			}else{
				client.query(query_string, parameter, function(err, result) {
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
			}

		});
	}
};
