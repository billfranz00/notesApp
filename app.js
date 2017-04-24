var express = require('express');
var notesController = require('notesController')

var app = express();

app.set('view engine', 'ejs')

app.use(express.staic('./assets'))

notesController(app)

app.listen(3000)
console.log('Notes application is running')