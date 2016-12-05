const connection = require(__dirname + '/../config/config');

exports.login = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT * FROM user WHERE email = ? AND password = PASSWORD(CONCAT(MD5(?), "AcR6yffDKw"))', 
			[req.body.email, req.body.password],
			(err, rows, fields) => {
				if(!err){
					res.send('Log-In Success')
				}else{
					res.send(err);
				}
	});
}

exports.createUser = (req, res) => {
	const connect = connection.getConnection();
	connect.query('INSERT INTO user(email, password, username) \
	VALUES(?, PASSWORD(CONCAT(MD5(?), "AcR6yffDKw")), ?)'),
	[req.body.email, req.body.password, req.body.username],
	(err, rows, fields) => {
		if(!err){
			res.send('Creation Success');
		}else{
			res.send(err);
		}
	}

}
