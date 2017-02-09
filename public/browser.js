// Button to generate QRCode
var qrbutton = document.querySelector('.get-qr-button');
// QR Code container element
var qrcode = document.querySelector('.qr-code-output');
// Profile name element
var result = document.querySelector('.result');
// Profile name element

// 1. On click, call route to get QRCode svg
qrbutton.addEventListener('click', function () {
  var o = new XMLHttpRequest();
  o.addEventListener('load', function (e) {
    var responseObj = JSON.parse(e.target.responseText);
    qrbutton.style.display = 'none';
    qrcode.innerHTML = responseObj.svg;
    listenForToken(responseObj.proto, responseObj.url);
  });
  o.open('GET', '/qr');
  o.send();
});

// 2. After SVG received, set up WebSocket with YOTI to handle response
function listenForToken (proto, url) {
  var host = 'wss://api.yoti.com/api/v1/connect-sessions/' + proto;
  var socket = new WebSocket(host);
  socket.onopen = function () {
    socket.send(JSON.stringify({subscription: proto}));
  };
  // Get Token
  socket.onmessage = function (msg) {
    var data = JSON.parse(msg.data);
    switch (data.status) {
      case 'COMPLETED' : {
        window.location = 'confirmation?token=' + data.token;
      }
    }
  };
}
