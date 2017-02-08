// Require our modules
const Hapi = require('hapi'); // The server is built on Hapi
const Inert = require('inert'); // Inert allows us to server static files
const Path = require('path'); // Path is used for easily constructing file paths

const routes = require('./routes.js'); // Import our modularised routes

const server = new Hapi.Server();

server.connection({
  port: process.env.PORT || 8000,
  // Gets our Port, or defaults to locahost in development
  host: process.env.IP || '0.0.0.0',
  // Gets our IP, or defaults to 0 in development
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '../public')
      // Where we want to server static files from
    }
  }
});

server.register([Inert], (err) => { // We register extra modules like inert here
  if (err) { throw err; }
  server.route(routes); // Plug the routes we imported earlier into the server
});

module.exports = server; 
