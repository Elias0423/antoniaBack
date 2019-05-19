var OracleBot = require('@oracle/bots-node-sdk');
var express = require('express');

const app = express();
OracleBot.init(app);

// implement webhook
const { WebhookClient, WebhookEvent } = OracleBot.Middleware;

const channel = {
  url: "https://botv2phx1I0044H0105B5bots-mpaasocimt.botmxp.ocp.oraclecloud.com:443/connectors/v1/tenants/idcs-100b89d671b54afca3069fe360e4bad4/listeners/webhook/channels/761e4e54-a2be-4d39-a8eb-829f7b5f5165",
  secret: "3bTHykOtOAopxFTms6Q7clu3M5EEbIl6"
};
const webhook = new WebhookClient({ channel: channel });
webhook.on(WebhookEvent.ERROR, console.error); // receive errors

// receive bot messages
app.post('/bot/message', webhook.receiver()); // receive bot messages
webhook.on(WebhookEvent.MESSAGE_RECEIVED, message => {
  console.log(message)
});

// send messages to bot (example)
app.post('/user/message', (req, res) => {
  //let message = "order a pizza"; 
  const MessageModel = webhook.MessageModel();
    const message = {
      userId: "7073589",
      messagePayload: MessageModel.textConversationMessage("order a pizza")
    };
  webhook.send(message)
    .then(() => res.send('ok'), e => res.status(400).end());
});

app.listen(3000, function() {
  console.log('listening on port 3000');
});
