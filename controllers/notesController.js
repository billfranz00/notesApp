// Require mongoose for connection to mongoDB and Body Parser for easy gathering of data from form 
var mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	Note = require('../models/notesSchema');

// Set up ES6 Library
mongoose.Promise = global.Promise;

// MongoDB connection
// mongoose.connect('mongodb://localhost/noteTest')
mongoose.connect('mongodb://billfranz00:test@ds127982.mlab.com:27982/notesapp');

// Dummy Data
// var data = [{title: 'Grocery List', note: 'Apples, bananas, chicken, mixed greens', date: 20170423},
// 			{title: 'My Address', note: '69 two way Buttsville, NJ 07829', date: 20160525},
// 			{title: 'My friends', note: 'Bobert, Sue, Jefferman93', date: 20140316},
// 			{title: 'Things to get', note: 'Star Wars Hat, snowboard, NJ banner', date: 20170505},
// 			{title: 'Weird Stuff', note: 'I love cats, except the one named santa paws', date: 57695769}];

var urlendcodedParser = bodyParser.urlencoded({extended: false})

// GET, POST, DELETE requests

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		Note.find({}, function(err, data) {
			if(err) throw err;
			console.log(data)
			res.render('index', {notes: data});
		})
		// res.render('index', {notes: data})
	})

	app.get('/noteList', function(req, res) {
		Note.find({}, function(err, data) {
			if(err) throw err;
			res.render('noteList', {notes: data})
		})
		// res.render('noteList', {notes: data})
	})

	app.get('/addNote', function(req, res) {
		res.render('addNote')
	})

	app.post('/addNote', urlendcodedParser, function(req, res) {
		// data.push(req.body)
		// res.json(data)
		Note(req.body).save(function(err, data) {
			if(err) throw err;
			res.json(data)
		})
	})
}