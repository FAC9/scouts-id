// Require our modules
const Hapi = require('hapi'); // The server is built on Hapi
const Inert = require('inert'); // Inert allows us to server static files
const Path = require('path'); // Path is used for easily constructing file paths
const Vision = require('vision');
const routes = require('./routes.js'); // Import our modularised routes

const server = new Hapi.Server();

var fs = require('fs');

var tls = {
  key: fs.readFileSync(Path.join(__dirname, '/keys/key.pem')),
  cert: fs.readFileSync(Path.join(__dirname, '/keys/cert.pem'))
};

server.connection({
  port: process.env.PORT || 8000,
  // Gets our Port, or defaults to locahost in development
  host: process.env.IP || '0.0.0.0',
  // Gets our IP, or defaults to 0 in development
  tls: tls,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '../public')
      // Where we want to server static files from
    }
  }
});

server.register([Inert, Vision], (err) => { // We register extra modules like inert here
  if (err) { throw err; }

  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: '../views'
  });
  server.route(routes); // Plug the routes we imported earlier into the server
});

module.exports = server;
