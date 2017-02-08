const Yoti = require('yoti-node-sdk');
const Path = require('path');
const Fs = require('fs');

const sdkId = "06f10391-1f16-4e1c-af6c-d6cd6a8714af";
const yotiPem = Fs.readFileSync(Path.join(__dirname, '../keys/yoti.pem'));
const yotiClient = new Yoti(sdkId, yotiPem);

const confirmationHandler = (request, reply) => {
  const token = request.query.token;
  if(!token) {
    reply("no token!")
    return
  }
  const promise = yotiClient.getActivityDetails(token);
  promise.then((activityDetails) => {
    const userId = activityDetails.getUserId();
    const profile = activityDetails.getUserProfile();
    reply(profile);
  })
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
