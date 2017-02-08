const { homeRoute } = require('./handlers/home.js');
const { staticRoute } = require('./handlers/static.js');

const routes = [
  homeRoute,
  staticRoute
];

module.exports = routes;
