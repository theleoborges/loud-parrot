var LoudParrot = this.LoudParrot || {};

LoudParrot.VoiceCommands = function(twitter) {
  function parse(spokenString) {
    console.log(spokenString);
    var tokens = spokenString.split(" ");
    var command = tokens[0];
    var rest = tokens.splice(1).join(" ");
    
    switch(command) {
      case 'post': twitter.tweet(rest); break;
      default: console.log('Command not found');
    }
    return spokenString;
  }

  return {
    parse: parse
  }
};

