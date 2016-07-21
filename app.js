/**
 * Node dependencies
 */

var ejs = require('ejs');
var express = require('express');
var morgan = require('morgan');
var path = require('path');

// The directory containing the app
var appDirectory = path.join(__dirname, 'app');

/**
 * Module dependencies
 */

var routesDirectory = path.join(appDirectory, 'routes');
var routes = require(routesDirectory);
var api = require(path.join(routesDirectory, 'api'));

// Create the express app
var app = module.exports = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(appDirectory, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

// app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(express.static(appDirectory));

/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});