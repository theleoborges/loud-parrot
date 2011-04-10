var voiceCommands;

$(function(){
  var twitter = LoudParrot.Twitter(jQuery, {
    resultsContainer:'#result',
    tweetContainer:'#tweet-text'
  });
  voiceCommands = LoudParrot.VoiceCommands(twitter);

  $('#tweet-link').click(function(){
    twitter.postToBackEnd($('#tweet-text').val());
  });
});
