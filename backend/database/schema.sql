DROP DATABASE IF EXISTS pinterest;
CREATE DATABASE pinterest;

USE pinterest;

CREATE TABLE IF NOT EXISTS user (
	user_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	email VARCHAR(64) UNIQUE NOT NULL,
	password VARCHAR(128) NOT NULL,
	username VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS board (
	board_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	board_title VARCHAR(128) NOT NULL,
	user_id BIGINT  NOT NULL,
	FOREIGN KEY(user_id) REFERENCES user(user_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS post (
	post_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	content TEXT NOT NULL,
    topic VARCHAR(64) NOT NULL,
    time_stamp timestamp NOT NULL default CURRENT_TIMESTAMP,
	user_id BIGINT NOT NULL,
	FOREIGN KEY(user_id) REFERENCES user(user_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS post_to_board (
	pb_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	post_id BIGINT,
	board_id BIGINT,
	FOREIGN KEY(post_id) REFERENCES post(post_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	FOREIGN KEY(board_id) REFERENCES board(board_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS follow (
	follow_id BIGINT AUTO_INCREMENT PRIMARY KEY,
	follower_id BIGINT,
	following_id BIGINT,
	FOREIGN KEY(follower_id) REFERENCES user(user_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE,
	FOREIGN KEY(following_id) REFERENCES user(user_id)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);
