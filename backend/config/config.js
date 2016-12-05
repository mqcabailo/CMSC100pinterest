const mysql = require('mysql');

const connection = mysql.createConnection({
	host	: '127.0.0.1',
	user	: 'root',
	password: '',
	database: 'pinterest'
});

connection.connect((err) => {
	if(!err){
		console.log('Database is connected');
	}else{
		console.log(err);
	}
});

module.exports.getConnection = () =>{
	return connection;
}

