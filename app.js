const express = require( 'express' );
const morgan = require('morgan');
const app = express(); // creates an instance of an express application

app.use(morgan('dev'));
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});