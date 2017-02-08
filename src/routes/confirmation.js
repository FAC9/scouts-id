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
    const profile = activityDetails.getUserProfile();
    if (users[userId].status === true) {
      reply(`
        <h1>a good scout</h1>
        <img src=${profile.selfie}></img>
        `);
    } else {
      reply(`
        <h1>not a good scout</h1>
        <img src=${profile.selfie}></img>
        `);
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
