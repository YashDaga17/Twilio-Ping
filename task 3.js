const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Take Your medicines!!',
     from: '+13806664614',
     to: '+919535417493'
   })
  .then(message => console.log(message.sid))