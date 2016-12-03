const connection = require(__dirname + '/../config/config');

exports.login = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT * FROM user WHERE email = ? AND password = PASSWORD(CONCAT(MD5(?), "AcR6yffDKw"))', 
			[req.body.email, req.body.password],
			(err, rows, fields) => {
				if(!err){
					res.send('Log-In Success')
				}else{
					console.log(err);
				}
	});

}
