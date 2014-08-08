// server.js

// BASE SETUP
// =============================================================================
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MeanData'); // connect to our database


var Bear = require('./Model/bear');
// call the packages we need
var express    = require('express')
  , path = require('path')
  , http = require('http')
  , reload = require('reload'); 		// call express
var app        = express(); 	
var clientDir = path.join(__dirname, 'client')			// define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

//app.use(app.router); 
  app.use(express.static(clientDir)); 

var port = process.env.PORT || 8080; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router
//app.use(express.favicon());
//   app.use(express.logger('dev'));
// middleware to use for all requests
router.use(function (req, res, next) {
  // do logging
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

app.get('/', function(req, res) {
  res.sendfile(path.join(clientDir, 'HomePage.htm'))
})

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
//router.get('/', function(req, res) {
//	res.json({ message: 'hooray! welcome to our api!' });	
//});

// more routes for our API will happen here

//for InputPage.html edited by Manish!!!!!!!!!!!!
//router.get('/InputPage', function(req, res) {

//res.send('InputPage.htm');
//});
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api

router.route('/bears')

// create a bear (accessed at POST http://localhost:8080/api/bears)
	.post(function (req, res) {

	  var bear = new Bear(); 		// create a new instance of the Bear model
	  bear.name = req.body.name;  // set the bears name (comes from the request)

	  // save the bear and check for errors
	  bear.save(function (err) {
	    if (err)
	      res.send(err);

	    res.json({ message: 'Bear created!' });
	  });

	}).get(function(req, res) {
		Bear.find(function(err, bears) {
			if (err)
				res.send(err);

			res.json(bears);
		});
	});
router.route('/bears/:bear_id')

// get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
	.get(function (req, res) {
	  Bear.findById(req.params.bear_id, function (err, bear) {
	    if (err)
	      res.send(err);
	    res.json(bear);
	  });
	})// update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
	.put(function (req, res) {

	  // use our bear model to find the bear we want
	  Bear.findById(req.params.bear_id, function (err, bear) {

	    if (err)
	      res.send(err);

	    bear.name = req.body.name; 	// update the bears info

	    // save the bear
	    bear.save(function (err) {
	      if (err)
	        res.send(err);

	      res.json({ message: 'Bear updated!' });
	    });

	  });
	}).delete(function(req, res) {
		Bear.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

  


app.use('/', router);

// START THE SERVER


var server = http.createServer(app)

reload(server, app)

// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);