const post 			= require(__dirname + '/../controllers/post');
const user			= require(__dirname + '/../controllers/user');
const profile 		= require(__dirname + '/../controllers/profile');
const board 		= require(__dirname + '/../controllers/board');

module.exports = (router) => {
	
	//USER LOGIN / REGISTER
	router.route('/login')								.get(user.login);
	router.route('/register')							.post(user.createUser);

	//POST FUNCTIONS
	router.route('/getPosts')							.get(post.getPosts);
	router.route('/findPosts')							.get(post.findPosts);
	router.route('/createPost')							.post(post.createPost);
	router.route('/followPost')							.post(post.followPost);

	//BOARD FUNCTIONS
	router.route('/findBoards')							.get(board.findBoards);
	router.route('/createBoard')						.post(board.createBoard);
	router.route('/followBoard')						.post(board.followBoard);
	router.route('/addToBoard')							.post(board.addToBoard);

	//PROFILE FUNCTIONS
	router.route('/profile/:id')						.get(profile.getProfileName);
	router.route('/profile/:id/getBoards')				.get(board.getBoardsInProfile);
	router.route('/profile/:id/getFollowedPosts')		.get(post.getFollowedPosts);
	router.route('/profile/:id/getFollowedBoards')		.get(board.getFollowedBoards);

	//HOME FUNCTIONS
	router.route('/getFeed')							.get(post.getFeed);

	return router;
}