var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");
app.set('views', __dirname + '/app_server/views');

var index = require('./app_server/routes/index.js')

app.use('/', index);
app.set('view engine', 'ejs');

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://'+process.env.DATABASE_URL;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/app_server"));
app.listen(process.env.PORT || 3000);
