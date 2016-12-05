const connection = require(__dirname + '/../config/config');

exports.getProfileName = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT username FROM user WHERE user.user_id = ?',
		req.params.id,
		(err, rows, fields) => {
		if(!err){
			res.send(rows);
			console.log(rows);
		}else{
			console.log('Couldn\'t find');
		}
	});
}

