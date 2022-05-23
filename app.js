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

const server = http.createServer();
// This is how we setup a custom server.
// This is the first step of the operation. (creating a web server.)
// createServer() returns an object which has all the server functionality.

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
