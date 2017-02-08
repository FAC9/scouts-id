const { homeRoute } = require('./handlers/home.js');
const { staticRoute } = require('./handlers/static.js');
const { confirmationRoute } = require('./handlers/confirmation.js');

const routes = [
  confirmationRoute,
  homeRoute,
  staticRoute
];

module.exports = routes;
