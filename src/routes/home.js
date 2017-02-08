const homeHandler = (request, reply) => {
  return reply.file("home.html");
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
