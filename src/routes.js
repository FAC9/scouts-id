const { homeRoute } = require('./routes/home.js');
const { staticRoute } = require('./routes/static.js');
const { confirmationRoute } = require('./routes/confirmation.js');
const qr = require('./routes/qr.js');

const routes = [
  confirmationRoute,
  homeRoute,
  staticRoute,
  qr
];

module.exports = routes;
