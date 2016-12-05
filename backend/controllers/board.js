const connection = require(__dirname + '/../config/config');

exports.findBoards = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT board_title FROM board WHERE board_title LIKE %?%', 
		req.body.title, 
		(err, rows, fields) => {
			if(!err){
				res.send(rows);
			}else{
				console.log(err);
			}
	});
}

exports.createBoard = (req, res) => {
	const connect = connection.getConnection();
	connect.query('INSERT INTO board(board_title, user_id) VALUES(?, ?)',
	[req.body.title, req.body.id],
	(err, rows, fields) => {
		if(!err){
			res.send("Created Board Successfully");
		}else{
			res.send(err);
		}
	});
}

exports.deleteBoard = (req, res) => {
	const connect = connection.getConnection();
	connect.query('DELETE FROM board WHERE board.board_id = ? AND board.user_id = ?',
	[req.body.board_id, req.body.user_id],
	(err, rows, fields) => {
		if(!err){
			res.send("Deleted Board");
		}else{
			res.send(err);
		}
	});
}

exports.getBoardsInProfile = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT board_title FROM board where board.user_id = ?', 
		req.params.id, 
		(err, rows, fields) => {
			if(!err){
				res.send(rows);
			}else{
				console.log(err);
			}
	});	
}

exports.addToBoard = (req, res) => {
	const connect = connection.getConnection();
	connect.query('INSERT INTO post_to_board(post_id, board_id) VALUES(?, ?)',
	[req.body.post_id, req.body.board_id],
	(err, rows, fields) => {
		if(!err){

		}else{
			console.log(err);
		}
	});
}

exports.followBoard = (req, res) => {
	const connect = conection.getConnection();
	connect.query('INSERT INTO follow_board(follower_id, following_id) VALUES(?, ?)',
		[req.body.user_id, req.body.board_id],
		(err, rows, fields) => {
			if(!err){

			}else{
				console.log(err);
			}
		});

}

exports.getFollowedBoards = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT board.board_title FROM board, follow_board WHERE follow_board.follower_id = ? AND follow_board.following_id = board.board_id',
		req.params.id,
		(err, rows, fields) => {
			if(!err){

			}else{
				res.send(err);
			}
		});
}
