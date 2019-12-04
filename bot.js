const Discord = require('discord.js');
const client = new Discord.Client();

console.log('Code Started Running')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret


