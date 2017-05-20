const assert = require('assert')
const Note = require('../models/notesSchema')

describe('Saving Records', function() {
	// tests
	it('saves a record to the database', function(done) {
		var note = new Note({
			title: 'Yacht Names',
			note: 'The GOAT Floaters, Prestige Worldwide, Lonely Island, T-Pains Mermaid Bonanza',
			date: 20170517
		})
		note.save().then(function() {
			assert(note.isNew === false)
			done();
		})
	})
})