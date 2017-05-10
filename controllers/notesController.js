// Require mongoose for connection to mongoDB and Body Parser for easy gathering of data from form 
var mongoose = require('mongoose'),
	bodyParser = require('body-parser');

// mLab connection
// mongoose.connect('')

// Template for Notes
var notesSchema = new mongoose.Schema({
	title: String,
	note: String,
	date: Number
})

// Model for notes schema
var Note = mongoose.model('Note', notesSchema)

// Dummy Data
var data = [{title: 'Grocery List', note: 'Apples, bananas, chicken, mixed greens', date: 20170423},
			{title: 'My Address', note: '69 two way Buttsville, NJ 07829', date: 20160525},
			{title: 'My friends', note: 'Bobert, Sue, Jefferman93', date: 20140316},
			{title: 'Things to get', note: 'Star Wars Hat, snowboard, NJ banner', date: 20170505},
			{title: 'Weird Stuff', note: 'I love cats, except the one named santa paws', date: 57695769}];

var urlendcodedParser = bodyParser.urlencoded({extended: false})

// GET, POST, DELETE requests

module.exports = function(app) {
	
	app.get('/', function(req, res) {
		res.render('index', {notes: data})
	})

	app.get('/noteList', function(req, res) {
		res.render('noteList', {notes: data})
	})

	app.get('/addNote', function(req, res) {
		res.render('addNote')
	})

	app.post('/addNote', urlendcodedParser, function(req, res) {
		data.push(req.body)
		res.json(data)
	})
}