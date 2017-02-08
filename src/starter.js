const server = require('./server.js');

server.start((err) => {
  if (err) { throw err; }
  console.log(`server started on ${server.info.uri}`);
});
