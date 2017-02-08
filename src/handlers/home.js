const homeHandler = (request, reply) => {
  return reply(
    `<h1>Hello world</h1><a href="static.html">go to a static page</a>`
  );
};

const homeRoute = {
  method: 'GET',
  path: '/',
  handler: homeHandler
};

module.exports = {
  homeRoute,
  homeHandler
}
