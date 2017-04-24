var mongoose = require('mongoose'),
	bodyParser = require('body-parser');

// mLab connection
// mongoose.connect('')

var notesSchema = new Schema({
	title: String,
	note: String,
	date: Number
})

var Note = mongoose.model('Note', notesSchema)

// Dummy Data
var data = [{title: 'Grocery List', note: 'Apples, bananas, chicken, mixed greens', date: 20170423},
			{title: 'My Address', note: '69 two way Buttsville, NJ 07829', date: 20160525},
			{title: 'My friends', note: 'Bobert, Sue, Jefferman93', date: 20140316}];

var urlendcodedParser = bodyParser.urlencoded({extended: false})