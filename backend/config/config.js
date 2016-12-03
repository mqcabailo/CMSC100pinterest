const mysql = require('mysql');

const connection = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	database: 'pinterest'
});

connection.connect((err) => {
	if(!err){
		console.log('Database is connected');
	}else{
		console.log('Error connecting to db');
	}
});

module.exports.getConnection = () =>{
	return connection;
}

