const connection = require(__dirname + '/../config/config');

exports.getPosts = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT * FROM post', (err, rows, fields) => {
		if(!err){
			res.send(rows);
			console.log(rows);
		}else{
			console.log('Couldn\'t find');
		}
	});
}

exports.findPost = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT * FROM post', (err, rows, fields) => {
		if(!err){
			res.send(rows);
			console.log(rows);
		}else{
			console.log('Couldn\'t find');
		}
	});
}