const request = require('request');
const QRCode = require('qrcode-svg');

module.exports = {
  path: '/qr',
  method: 'GET',
  handler: (req, reply) => {
    request.get(`https://www.yoti.com/qr/7aa7dd7f-c73c-4384-8af7-14906d71a5f2`, (e, response, body) => {
      // Get URL
      const url = body.match(/https:\/\/code\.yoti\.com\/.*\?/)[0].slice(0, -1);
      // Get proto
      const proto = body.match(/proto_.*=/)[0];
      // Make SVG
      const svg = new QRCode({
        content: url,
        color: 'white',
        background: '#432668',
        width: 300,
        height: 300,
        padding: 4
      }).svg();
      // Give to client
      reply(JSON.stringify({svg, proto, url}));
    });
  }
};
