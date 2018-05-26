const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'geo.help') {
    	message.channel.send('I Only got One Command, Cause Im In Development The Command is "geo.bing"');
  	}
});

client.on('message', message => {
    if (message.content === 'geo.bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
