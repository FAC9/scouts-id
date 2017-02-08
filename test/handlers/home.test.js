const test = require('tape');
const { homeHandler } = require('../../src/handlers/home.js');

module.exports = () => {
  test('Home handler replies with our homepage content', (t) => {
    t.plan(1);
    const request = (x) => x;
    const response = data => data;

    t.equal(homeHandler(request, response),
      `<h1>Hello world</h1><a href="static.html">go to a static page</a>`,
      `response recieved expected data`);
  });
};
