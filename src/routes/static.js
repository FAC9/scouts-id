const staticRoute = {
  method: 'GET',
  path: '/{file*}',
  handler: {
    directory: {
      path: '.'
    }
  }
};

module.exports = {
  staticRoute
};
