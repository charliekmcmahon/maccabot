var Discord = require('discord.js');
//const fetch = require('node-fetch');
var bot = new Discord.Client();
var isReady = true;

console.log('Code has started')

bot.login(process.env.TOKEN);

console.log ('Got past login')

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'over RaccaNetwork',
            type:3,
        }
    });
});

bot.on('message', message => {
  if (isReady && message.content === 'play alan')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playFile('/Users/charliemcmahon/MaccaBot/music.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
  else if (isReady && message.content === 'bruh')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playFile('/Users/charliemcmahon/MaccaBot/bruh.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
  else if (isReady && message.content === 'stop')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playFile('/Users/charliemcmahon/MaccaBot/stop.mp3');
     dispatcher.on("end", end => {
       voiceChannel.leave();
       });
   }).catch(err => console.log(err));
   isReady = true;
  }
  else if (isReady && message.content === 'ping')
  {
  		message.channel.send('Pong!')
  }
  else if (message.content === 'cat')
  {
  		message.channel.send("Did you mean _'Emily'_?")
  }
  else if (message.content === 'wud')
  {
  		message.channel.send("What's up my dudes?")
  }
  else if (message.content === 'emily')
  {
  		message.channel.send("Did you mean _'cat'_?")
  }
  else if (message.content === 'Emily')
  {
  		message.channel.send("Did you mean _'Cat'_?")
  }
  else if (message.content === 'achoo')
  {
  		message.reply("Bless you!")
  }
else if (message.content === 'sadcringe')
  {
  		message.channel.send("https://preview.redd.it/3cun04g3lcm31.png?width=640&crop=smart&auto=webp&s=f2604218538f14c7ed129868ca851f16e9c0e49f")
  }
else if (message.content === 'yo')
{
		message.channel.send("ROBOTS RISE", {
 tts: true
})
}
else if (message.content === 'beatbox'){
message.channel.send("Boots and cats and boots and cats and Boots and cats and boots and cats and Boots and cats and boots and cats and Boots and cats and boots and cats and Boots and cats and boots and cats and Boots and cats and boots and cats and ", {
 tts: true
})
}
else if (message.content === 'baka'){
message.channel.send("Nya")
}
else if (message.content === 'Baka!'){
message.channel.send("Nya!")
}
else if (message.content === 'baka!'){
message.channel.send("nya!")
}
else if (message.content === 'BAKA!'){
message.channel.send("NYA!")
}
else if (message.content === 'school'){
message.channel.send("Did you mean 'depression'?")
}
else if (message.content === 'studying'){
message.channel.send("Did you mean 'students dying'?")
}
else if (message.content === 'studying'){
message.channel.send("Did you mean 'students dying'?")
}
else if (message.content === 'mutejosh'){
//message.channel.send("Shut up Josh")
message.channel.send("mb!mute <@599418630752567336> 5m")
}
else if (message.content === 'night'){
message.reply("Good Night! Sleep tight!")
}
else if (message.content === 'meme'){
message.channel.send("Today's Meme of The Day: ")
message.channel.send("https://pics.me.me/julian-du-matchet-med-julian-p%C3%A5-14-09-2019-wanna-hear-a-63029952.png")
}
else if (message.content === '0/0'){
message.channel.send("Imagine that you have 0 cookies and you split them between 0 friends. See, it doesn't make sense. And cookie monster is sad that he has 0 cookies, and you are sad because you have no friends.")
}
//else if (message.content === 'lights'){
//message.channel.send("lol i got an error. any bidders?")
//}
//fetch('https://maker.ifttt.com/trigger/button_toggled/with/key/hLpXhAkwzhMvtQGs_t9SFUb-J6JkvRZmviaYr5Ey62e')
});
