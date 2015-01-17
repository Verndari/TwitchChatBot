//  TODO:
//
//  Link Protecion [works]  (Check if user is Owner or Mod to not be timeouted)
//  Caps Protection [works] (Check if user is Owner or Mod to not be timeouted) 
//  Now Playing [x]
//  Counter [half working]
//  loyality system
//  


var irc = require('twitch-irc');
var fs = require('fs');
//var Player = require('player')


var client = new irc.client ({
    options: {
        debug: true,
        debugIgnore: ['ping', 'chat', 'action'],
        logging: false,
        tc: 3
    },
    identity: {
        username: 'botname',
        password: 'oauth:xxxx'
    },
    channels: ['#channelname']
});

client.connect();
console.log('### Now Conntecting to the Twitch Chat Server###');

// --- Start of costume functions ---

var failcount = 1;
function failcount() {
    if ('!test' = 1)
        return failcount
}

// --- End of costume functions ---

// --- Start of the Command section ---

client.addListener('chat', function (channel, user, message) {
    console.log(channel.channels, user.username)
    
    player = new Player('./01 Diggy Diggy Hole.mp3')
    var usecount = 0;
    
    if (message.indexOf('!hello') === 0) {
        client.say(channel, 'Hey '+user.username+'! How you doing? Kappa');
    } 
    if (message.indexOf('!deviant') === 0) {
        client.say(channel, 'Hier könnt ihr meine bisherigen Zeichnungen sehen. http://gormhl.deviantart.com/');
        console.log('Sending out !deviant command');
        
    }
    if (message.indexOf('!test') === 0) {
        client.say(channel, 'Potzdonner, was war denn das nun wieder FailFish? Das wäre dann Nummer '+ failcount++ +' auf der Fail-Liste...')
    }
    if (message.indexOf('!diggy') === 0) {
        player.play(function(err, player) {
        console.log('playend!');
        });
    }
        
    
});

// --- End of the Command section ---

client.addListener('chat', function (channel, user, message) {
    var re = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|tv|local|internal|xxx))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@\/?]*)?)(\s+|$)/gi;
    if (message.match(re) != null) {
        client.timeout(channel, user.username, 1);
        console.log('User: ' +user.username+ ' got an Timeout for Posting a Link');
    }
    
    if (message === message.toUpperCase() && message.length > 8) {
        client.timeout(channel, user.username, 1);
        console.log('User: ' +user.username+ ' got an Timeout for Caps');
    }

});


// TEST AREA //

var myData = {
    name: 'failcounter',
    counts: ''
}

var outputFilename = '/IDE/nodejs/test.json';

fs.writeFile(outputFilename, JSON.stringify(myData, null, 4), function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("JSON saved to " + outputFilename);
    }
});
   

// PLYER TEST AREA





