var Discord = require('discord.js');
var phantom = require('phantom');
const fetch = require('node-fetch');
const delay = require('delay');
var bot = new Discord.Client();
var isReady = true;

console.log('js now running')

bot.login(process.env.TOKEN);

phantom.create(function (ph) {
  ph.createPage(function (page) {
    var url = "http://www.bdtong.co.kr/index.php?c_category=C02";
    page.open(url, function() {
      page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        page.evaluate(function() {
          $('.listMain > li').each(function () {
            console.log($(this).find('a').attr('href'));
          });
        }, function(){
          ph.exit()
        });
      });
    });
  });
});

bot.on('ready', () => {
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'mc.beastvr.xyz:443',
            type:1,
        }
    });
});

bot.on('message', message => {
  if (isReady && message.content === 'play random music')
  {
  isReady = false;
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playFile('music.mp3');
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
     delay(2000);
     const dispatcher = connection.playFile('bruh.mp3');
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
     const dispatcher = connection.playFile('stop.mp3');
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
  else if (message.content === '0/0'){
    message.channel.send("Imagine that you have 0 cookies and you split them between 0 friends. See, it doesn't make sense. And cookie monster is sad that he has 0 cookies, and you are sad because you have no friends.")
  }
});
