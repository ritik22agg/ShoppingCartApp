const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

app.use('/', express.static(__dirname + '/public'));
app.use('/api', require('./routes/api').route);
app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.listen(4444, ()=>{
	console.log("server started at http://localhost:4444");
});