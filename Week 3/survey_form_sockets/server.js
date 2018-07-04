// all varibales required and needed to run express and our routes
var path = require("path");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var server = app.listen(8811, function() {
    console.log("listening on port 8811");
});
var route = require('./routes/index.js')(app, server);


// sets up bodyparser
app.use(bodyParser.urlencoded({ extended: true }));

// static content
app.use(express.static(path.join(__dirname, "./static")));

// sets up views
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index");
})

