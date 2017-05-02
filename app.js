// Requiries
var express = require('express');
var notesController = require('./controllers/notesController')

// running the application through express
var app = express();

// Using ejs views
app.set('view engine', 'ejs')

// Using files in assets folder
app.use(express.static('./assets'))

// run the notes controller through the express application
notesController(app)

// run the local server
app.listen(3000)
console.log('Notes application is running')