const connection = require(__dirname + '/../config/config');

exports.findPosts = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT * FROM post WHERE post.topic like %?%', 
		req.body.topic,
		(err, rows, fields) => {
		if(!err){
			res.send(rows);
			console.log(rows);
		}else{
			console.log('Couldn\'t find');
		}
	});
}

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

exports.createPost = (req, res) => {
	const connect = connection.getConnection();
	connect.query('INSERT INTO post(content, topic, user_id) VALUES(?, ?, ?)',
	[req.body.content, req.body.topic, req.body.id],
	(err, rows, fields) => {
		if(!err){
			res.send("Created Post Successfully");
		}else{
			res.send(err);
		}
	});
}

exports.deletePost = (req, res) => {
	const connect = connection.getConnection();
	connect.query('DELETE FROM post WHERE post.post_id = ? AND post.user_id = ?',
	(err, rows, fields) => {
		if(!err){
			res.send("Deleted Post");
		}else{
			res.send(err);
		}
	});
}

exports.getFeed = (req, res) => {
	console.log(req.body);
	const connect = connection.getConnection();
	connect.query('SELECT DISTINCT post.post_id, post.topic, post.content, post.time_stamp FROM post, board, post_to_board, follow_post, follow_board, user \
		WHERE (post_to_board.post_id = post.post_id AND post_to_board.board_id = board.board_id AND board.user_id = user.user_id AND user.user_id = ?) \
		OR post.user_id = ? OR (follow_post.follower_id = ? AND follow_post.following_id = post.post_id) \
		OR (follow_board.follower_id = ? AND follow_board.following_id = board.board_id AND post_to_board.board_id = board.board_id AND post_to_board.post_id = post.post_id) ORDER BY post.time_stamp', 
		[req.body.user_id, req.body.user_id, req.body.user_id, req.body.user_id],
		(err, rows, fields) => {
			if(!err){
				res.send(rows);
			}else{
				console.log(err);
			}
		});
}

exports.getPostsInABoard = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT post.topic, post.content FROM post, board, post_to_board \
		WHERE post_to_board.post_id = post.post_id AND post_to_board.board_id = board.board_id \
		AND board.board_id = ?', 
		[req.body.board_id], 
		(err, rows, fields) => {
			if(!err){
				res.send(rows);
			}else{
				console.log(err);
			}
		});
}

exports.followPost = (req, res) => {
	const connect = connection.getConnection();
	connect.query('INSERT INTO follow_post(follower_id, following_id) VALUES(?, ?)', 
		[req.body.user_id, req.body.post_id],
		(err, rows, fields) => {
			if(!err){

			}else{
				res.send(err);
			}

		});
}

exports.getFollowedPosts = (req, res) => {
	const connect = connection.getConnection();
	connect.query('SELECT post.topic FROM post, follow_post WHERE follow_post.follower_id = ? AND follow_post.following_id = post.post_id',
		req.params.id,
		(err, rows, fields) => {
			if(!err){

			}else{
				res.send(err);
			}
		});
}