const connection = require(__dirname + '/../config/config');

exports.findBoards = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT board_title FROM board WHERE board_title like ?', req.body.title, (err, rows, fields) => {
		if(!err){
			res.send(rows);
		}else{
			console.log(err);
		}
	});
}

exports.getBoards = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT board_title FROM board INNER JOIN user ON user.user_id = ?', req.params.id, (err, rows, fields) => {
		if(!err){
			res.send(rows);
		}else{
			console.log(err);
		}
	});	
}

exports.getPostsInBoards = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT post.topic, post.content FROM post, board, post_to_board, user WHERE post_to_board.post_id = post.post_id AND post_to_board.board_id = board.board_id AND board.user_id = user.user_id AND user.user_id = ?', 
		req.params.id, 
		(err, rows, fields) => {
			if(!err){
				res.send(rows);
			}else{
				console.log(err);
			}
		});
}
