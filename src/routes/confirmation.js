const Yoti = require('yoti-node-sdk');
const Path = require('path');
const Fs = require('fs');

const sdkId = "06f10391-1f16-4e1c-af6c-d6cd6a8714af";
const yotiPem = Fs.readFileSync(Path.join(__dirname, '../keys/yoti.pem'));
const yotiClient = new Yoti(sdkId, yotiPem);

const users = {
  'fAUhmIxQAMxKd7pQ0mACongkiz3OpS1oqLfHpamEN7QT0CCuBy4DCsgzpUn9g87G': {
    name: 'John Whiles',
    status: true
  },
  'pChUdc2kq71VAEpKindWj1/ef6G3C+ih/8kr3Y0/JBMbHFiGhhYO/6FqUdjZXquN': {
    name: 'Steve Hopkinson',
    status: false
  }
};

const confirmationHandler = (request, reply) => {
  const token = request.query.token;
  if (!token) {
    reply('no token!');
    return;
  }
  const promise = yotiClient.getActivityDetails(token);
  promise.then((activityDetails) => {
    const userId = activityDetails.getUserId();
    if (users[userId].status === true) {
      reply('they are a good scout');
    } else {
      reply('not a good scout');
    }
  });
};

const confirmationRoute = {
  method: 'GET',
  path: '/confirmation',
  handler: confirmationHandler
};

module.exports = {
  confirmationRoute,
  confirmationHandler
}
