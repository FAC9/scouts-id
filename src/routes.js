const { homeRoute } = require('./routes/home.js');
const { staticRoute } = require('./routes/static.js');
const { confirmationRoute } = require('./routes/confirmation.js');

const routes = [
  confirmationRoute,
  homeRoute,
  staticRoute
];

module.exports = routes;
