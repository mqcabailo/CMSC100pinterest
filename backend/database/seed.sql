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

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic1", 1);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic2", 2);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic3", 3);

INSERT INTO post(content, topic, user_id) \
	VALUES("content content content content", "topic4", 2);

INSERT INTO board(board_title, user_id) \
	VALUES("board title1", 1);

INSERT INTO board(board_title, user_id) \
	VALUES("board title2", 1);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(1, 1);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(3, 1);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(2, 2);

INSERT INTO post_to_board(post_id, board_id) \
	VALUES(4, 2);
