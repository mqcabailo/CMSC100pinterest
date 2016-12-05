USE pinterest;

DELETE FROM user;
DELETE FROM board;
DELETE FROM post;
DELETE FROM profile;
DELETE FROM post_to_board;
DELETE FROM follow;

INSERT INTO user(email, password, username) \
    VALUES("test1@test.ph", PASSWORD(CONCAT(MD5("password"), "AcR6yffDKw")), \
   	"username1");

INSERT INTO user(email, password, username) \
    VALUES("test2@test.ph", PASSWORD(CONCAT(MD5("password"), "AcR6yffDKw")), \
   	"username2");

INSERT INTO user(email, password, username) \
    VALUES("test3@test.ph", PASSWORD(CONCAT(MD5("password"), "AcR6yffDKw")), \
   	"username3");

INSERT INTO user(email, password, username) \
    VALUES("test4@test.ph", PASSWORD(CONCAT(MD5("password"), "AcR6yffDKw")), \
   	"username4");

INSERT INTO user(email, password, username) \
    VALUES("test5@test.ph", PASSWORD(CONCAT(MD5("password"), "AcR6yffDKw")), \
   	"username5");

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic1", 1);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic2", 2);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic3", 3);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic4", 4);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic5", 5);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic6", 1);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic7", 2);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic8", 3);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic9", 4);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic10", 5);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic11", 1);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic12", 2);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic13", 3);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic14", 4);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic15", 5);

INSERT INTO board(board_title, user_id) \
	VALUES("board title1", 1);

INSERT INTO board(board_title, user_id) \
	VALUES("board title2", 1);

INSERT INTO board(board_title, user_id) \
	VALUES("board title3", 2);

INSERT INTO board(board_title, user_id) \
	VALUES("board title4", 2);

INSERT INTO board(board_title, user_id) \
	VALUES("board title5", 3);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(1, 1);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(1, 2);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(1, 3);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(2, 2);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(2, 3);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(2, 4);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(3, 1);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(4, 2);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(5, 5);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(6, 2);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(7, 2);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(8, 4);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(9, 3);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(9, 2);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(9, 5);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(11, 5);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(11, 4);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(12, 2);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(13, 1);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(13, 3);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(14, 2);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(14, 1);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(14, 5);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(15, 1);

INSERT INTO follow_board(follower_id, following_id) \
	VALUES(1, 3);

INSERT INTO follow_board(follower_id, following_id) \
	VALUES(1, 4);

INSERT INTO follow_board(follower_id, following_id) \
	VALUES(2, 1);

INSERT INTO follow_board(follower_id, following_id) \
	VALUES(2, 2);

INSERT INTO follow_board(follower_id, following_id) \
	VALUES(4, 1);

INSERT INTO follow_board(follower_id, following_id) \
	VALUES(4, 3);

INSERT INTO follow_post(follower_id, following_id) \
	VALUES(1, 1);

INSERT INTO follow_post(follower_id, following_id) \
	VALUES(2, 3);

INSERT INTO follow_post(follower_id, following_id) \
	VALUES(4, 1);

INSERT INTO follow_post(follower_id, following_id) \
	VALUES(5, 1);

INSERT INTO follow_post(follower_id, following_id) \
	VALUES(5, 1);

INSERT INTO follow_post(follower_id, following_id) \
	VALUES(5, 2);

INSERT INTO follow_post(follower_id, following_id) \
	VALUES(5, 3);

INSERT INTO follow_post(follower_id, following_id) \
	VALUES(5, 4);

INSERT INTO follow_post(follower_id, following_id) \
	VALUES(5, 5);

INSERT INTO follow_post(follower_id, following_id) \
	VALUES(5, 3);
