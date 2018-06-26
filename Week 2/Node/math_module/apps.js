var http = require('http');
var fs = require('fs');
var my_module = require('./mathlib')();     //notice the extra invocation parentheses!
// console.log(my_module);

console.log(my_module.add(2,3));


// math.add(2,3) should return 5)

// multiply two numbers (e.g. math.multiply(3,5) should return 15)

// square a number (e.g. math.square(5) should return 25)

// return a random number between the two numbers 
// (e.g. math.random(1,35) should return a random number between 1 and 35)



// var server = http.createServer(function (request, response){
//     console.log('client request URL: ', request.url);

//     if(request.url === '/') {
//         fs.readFile('./views/index.html', 'utf8', function (errors, contents){
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             response.write(contents); 
//             response.end();
//         });
//     }
//     else {
//         fs.readFile('error.html', 'utf8', function (errors, contents){
//             response.writeHead(200, {'Content-type': 'text/html'});
//             response.write(contents); 
//             response.end();
//         });
//    }
// });
// server.listen(8000);
// console.log("Running in localhost at port 8000");


