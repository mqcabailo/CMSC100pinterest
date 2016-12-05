'use strict'

const express 			= require('express');
const router 			= require(__dirname + '/routers/router');
const bodyParser 		= require('body-parser')
const app 				= express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:8000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Credentials", true);
	next();
});

app.use(bodyParser.json())
app.use(router(express.Router()));


app.listen(3000);
console.log('Server running at port 3000');