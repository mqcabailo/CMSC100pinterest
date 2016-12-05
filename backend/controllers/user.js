const connection = require(__dirname + '/../config/config');

exports.login = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT user_id, email, username FROM user WHERE email = ? AND password = PASSWORD(CONCAT(MD5(?), "AcR6yffDKw"))', 
			[req.body.email, req.body.password],
			(err, rows, fields) => {
				if(rows[0] != undefined){
					res.send(rows);
				}else{
					res.status(404).send();
				}
	});
}

exports.createUser = (req, res) => {
	const connect = connection.getConnection();
	connect.query('INSERT INTO user(email, password, username) VALUES(?, PASSWORD(CONCAT(MD5(?), "AcR6yffDKw")), ?)',
	[req.body.email, req.body.password, req.body.username],
	(err, rows, fields) => {
		if(!err){
			res.send('Creation Success');
		}else{
			res.send(err);
		}
	});
}
