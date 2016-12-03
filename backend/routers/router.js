const config		= require(__dirname + '/../config/config');
const post 			= require(__dirname + '/../controllers/post');
const user			= require(__dirname + '/../controllers/user');
const profile 		= require(__dirname + '/../controllers/profile');
const board 		= require(__dirname + '/../controllers/board');

module.exports = (router) => {
	
	router.route('/get-posts')						.get(post.getPosts);
	router.route('/find-post:title')				.get(post.findPost);

	router.route('/profile/:id')					.get(profile.getProfileName);
	router.route('/profile/:id/getBoards')			.get(board.getPostsInBoards);

	return router;
}