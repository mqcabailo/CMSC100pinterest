const post 			= require(__dirname + '/../controllers/post');
const user			= require(__dirname + '/../controllers/user');
const profile 		= require(__dirname + '/../controllers/profile');
const board 		= require(__dirname + '/../controllers/board');

module.exports = (router) => {
	
	//USER LOGIN / REGISTER
	router.route('/login')								.post(user.login);
	router.route('/register')							.post(user.createUser);

	//POST FUNCTIONS
	router.route('/getPosts')							.get(post.getPosts);
	router.route('/findPosts')							.get(post.findPosts);
	router.route('/createPost')							.post(post.createPost);
	router.route('/followPost')							.post(post.followPost);
	router.route('/deletePost')							.delete(post.deletePost);

	//BOARD FUNCTIONS
	router.route('/findBoards')							.get(board.findBoards);
	router.route('/createBoard')						.post(board.createBoard);
	router.route('/followBoard')						.post(board.followBoard);
	router.route('/addToBoard')							.post(board.addToBoard);
	router.route('/deleteBoard')						.delete(board.deleteBoard);

	//PROFILE FUNCTIONS
	router.route('/profile/:id')						.get(profile.getProfileName);
	router.route('/profile/:id/getBoards')				.get(board.getBoardsInProfile);
	router.route('/profile/:id/getFollowedPosts')		.get(post.getFollowedPosts);
	router.route('/profile/:id/getFollowedBoards')		.get(board.getFollowedBoards);

	//HOME FUNCTIONS
	router.route('/getFeed')							.post(post.getFeed);

	return router;
}