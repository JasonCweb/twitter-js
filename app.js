const express = require( 'express' );
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const app = express(); // creates an instance of an express application
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
//nunjucks.configure('views'); // point nunjucks to the proper directory for templates
nunjucks.configure('views', { noCache: true });
app.use(morgan('dev'));
app.use(express.static('public'))

const routes = require('./routes');
app.use('/', routes);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});