// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    } 
    else if (request.url === "/cats") {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }
   else if (request.url === "/images/kitten.jpeg") {
        fs.readFile('./images/kitten.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/white.jpeg") {
        fs.readFile('./images/white.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
   }
   else if (request.url === "/images/grey.jpeg") {
        fs.readFile('./images/grey.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/orange.jpeg") {
        fs.readFile('./images/orange.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
   }
   else if (request.url === "/cars/new") {
        fs.readFile('./views/add_car.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/bmw.jpeg") {
        fs.readFile('./images/bmw.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
   }
   else if (request.url === "/images/honda.jpeg") {
        fs.readFile('./images/honda.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/images/range.jpeg") {
        fs.readFile('./images/range.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
   }
   else if (request.url === "/images/tesla.jpeg") {
        fs.readFile('./images/tesla.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents); 
            response.end();
        });
    }
    // request didn't match anything:
    else {
        fs.readFile('error.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }
});
// tell your server which port to run on
server.listen(7707);
// print to terminal window
console.log("Running in localhost at port 7707");


