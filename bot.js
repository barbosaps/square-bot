const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'lhelp') {
    	message.channel.send('I Only got One Command, Cause Im In Development The Command is "lbing"');
  	}
});

client.on('message', message => {
    if (message.content === 'lbing') {
    	message.reply('bong :D');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
