var LoudParrot = this.LoudParrot || {};

LoudParrot.Twitter = function($) {
  function tweet(text) {
    console.log("tweeting " + text);
//    $.post('tweet', {text: text},function(data) {
//      $('#result').html(data);
//    });
  }

  return {
    tweet: tweet
  }
}(jQuery);

LoudParrot.VoiceCommands = function(twitter) {

  function parse(spokenString) {
    console.log(spokenString);
    var tokens = spokenString.split(" ");
    var command = tokens[0];
    var rest = tokens.splice(1).join(" ");
    
    switch(command) {
      case 'tweet': twitter.tweet(rest); break;
      default: alert("nein");
    }
    return spokenString;
  }

  return {
    parse: parse
  }
}(LoudParrot.Twitter);

