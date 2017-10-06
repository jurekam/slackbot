var priv_config = require('./private.json');

var Bot = require('slackbots');
var channel = "general";
var ownername = "jurekam";

// create a bot
var settings = {
    token: priv_config.slack_token,
    name: 'JurekBot'
};
var bot = new Bot(settings);

bot.on('start', function() {
    bot.postMessageToChannel(channel, 'Hello channel!');
    bot.postMessageToUser(ownername, 'hello bro!');
    //bot.postMessageToGroup('some-private-group', 'hello group chat!');
});
