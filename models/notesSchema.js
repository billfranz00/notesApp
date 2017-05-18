var mongoose = require('mongoose')

var notesSchema = new mongoose.Schema({
	title: String,
	note: String,
	date: Number
})

// Model for notes schema
var Note = mongoose.model('Note', notesSchema)

module.exports = Note;