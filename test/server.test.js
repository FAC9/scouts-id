const test = require('tape');

const server = require('./../src/server.js');

module.exports = () => {
  test(`Server responds sucessfuly to request for homepage`, (t) => {
    const options = {
      method: 'GET',
      url: '/'
    };

    t.plan(2);

    server.inject(options, (response) => {
      t.equal(response.statusCode, 200, `should recieve 200 status, (ok)`);
      t.equal(response.payload, `<h1>Hello world</h1><a href="static.html">go to a static page</a>`, `should recieve contents of index page`);
      server.stop();
    });
  });

  test(`Server sucessfully responds to requests for static files`, (t) => {
    const options = {
      method: 'GET',
      url: '/static.html'
    };
    t.plan(3);
    server.inject(options, (response) => {
      t.equal(response.statusCode, 200, `should recieve 200 status, (ok)`);
      t.equal(response.payload.length, 227, `should recieve content of static file`);
      t.equal(response.headers['content-type'], `text/html; charset=utf-8`,
        `content type should be text/html`);
      server.stop();
    });
  });

  test(`Server sucessfully responds to requests for css files`, (t) => {
    const options = {
      method: 'GET',
      url: '/css/style.css'
    };
    t.plan(2);
    server.inject(options, (response) => {
      console.log(response.headers['content-type']);
      t.equal(response.statusCode, 200, `should recieve 200 status, (ok)`);
      t.equal(response.headers['content-type'], `text/css; charset=utf-8`,
        `content type should be text/css`);
      server.stop();
    });
  });
};
