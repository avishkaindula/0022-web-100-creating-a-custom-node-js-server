// With NodeJS, we write code that executes in a Web server.
// const userName = "Indula";
// console.log(userName);
// We can execute the above code by typing "node app.js" inside the terminal.

const http = require("http");
// http is a built-in package which is included inside node js
// "require" is a function used to call for packages.
// "http" is the name of the package.
// But we can say that http is an     object.
// So there are lot's of built-in methods of the http object.
// http is a package used to listen to incoming requests and send back responses.
// And that's what we need to do if we want to write a web server.
// Web servers listen to incoming requests and send back responses.

function handleRequest(request, response) {
  response.statusCode = 200;
  // statusCode is a property that's telling the browser whether a request succeeded or not.
  // If we wan't to communicate a success, we should set it to 200
  // 404 is the status code which is used to communicate from the server to the browser,
  // that the browser tried to access a page that doesn't exist.
  response.end("<h1>Hello World!</h1>");
  // "end" is a property used to end the preparing the response and send it to the client.
  // To "end", we can pass the data that should be sent.
  // We could sent a very basic piece of HTML code as the response like this.
}
// This function has certain parameter values.
// a parameter value that extracts data from an incoming request,
// and a second parameter value that takes a response object that allows us to send back a response later.

const server = http.createServer(handleRequest);
// This is how we setup a custom server.
// This is the first step of the operation. (creating a web server.)
// createServer() returns an object which has all the server functionality.
// We tell nodeJS that this handleRequest is the function that should be executed once we got a incoming request.
// We don't add () after handleRequest like this => http.createServer(handleRequest());

server.listen(3000);
// This is the second step of the operation.
// We now start listening on a so-called "port number".
// Every computer has ports.
// Ports are basically entry points to that computer that are either opened or closed.
// Most ports are closed by default for security reasons.
// for example if we send a request to amazon.com, by default we send that request to port 80.
// It can also be expressed by this. amazon.com:80 (but we typically use amazon.com:443 because that used SSL.)
// SSL sends the request in an encrypted secure way.
// We don't need to add the port number when we are using a browser and do normal task.
// But when working with NodeJS and creating your own server, we need to let nodeJS know
// which port we want to listen for incoming requests.
// 3000 is a port used during development.
// By adding this, we tell nodeJS to listen to incoming requests on port 3000.
// If we would then later deploy it as code and move it onto a real remote machine
// which we rented from a hosting provider, we would swap this for 80 or 443 instead.

// Now if we finally run this app through the terminal by typing node app.js, it start's executing and
// keeps on executing. That is what we wants to happen.
// Because when we execute this code, we start our own server.
// And a server isn't a process that stops suddenly, instead it should keep on running,
// Because it should keep on handling requests.
// We can stop the server by typing ctrl + C on the terminal.
// This is a local server that's run in my machine.
// It won't get exposed to other people around the world because
// because my local network setup isn't allowing requests from other computers.
// But we can send a request to this server form inside our "own computer" since the server is running on over computer.
// so if we type localhost:3000 in our browser after running node app.js through the terminal,
// we could see "Hello World!" as the response.
// And this is now a website that is displayed by the browser, but the html code that is been displayed
// is now not actually code that we wrote with some html file, but instead it's some html response
// that is generated and sent back by our own nodeJS server.
// So now this nodeJS server now also replaces the "live server extension" we used before
// because now we don't need that extra development server created by the extension since we do create over very own server.
