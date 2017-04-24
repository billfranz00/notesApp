var express = require('express');

var app = express();

app.set('view engine', 'ejs')

app.use(express.staic('./assets'))

app.listen(3000)
console.log('Notes application is running')