var session = require('express-session');
var count = 0;
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var app = express();
var bodyParser = require('body-parser');

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.use(bodyParser.urlencoded({ extended: true }));
// static content
// app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './../views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
    if (!req.session.number){
        req.session.number = Math.floor((Math.random() * 100) + 1);
    }    
    // console.log(`Random number is ${req.session.number}`);
    res.render("index");
})

// route for results from the form
app.post('/result', function(req, res) {
    // console.log(req.session.input);
    if (req.session.number > req.body.input){
        console.log("the number is higher");
        res.redirect('/')

    } else if (req.session.number < req.body.input){
        console.log("the number is lower");
        res.redirect('/')

    } else {
        console.log("you got it!!");
        res.redirect('/')
    }
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
