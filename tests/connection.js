const mongoose = require('mongoose');

// ES6 Promises (Use ES6 library instead of mongodb library)
mongoose.Promise = global.Promise;

// Before all tests
// before(function(done) {
	// connect to mongodb
	mongoose.connect('mongodb://localhost/test')

	mongoose.connection.once('open', function() {
		console.log('Connection is complete')
		// done();
	}).on('error', function(error) {
		console.log('Connection Error', error)
	})
// })