$(function(){
  var twitter = LoudParrot.Twitter(jQuery, {
    resultsContainer:'#result',
    tweetContainer:'#tweet-text'
  });
  LoudParrot.VoiceCommands(twitter);

  $('#tweet-link').click(function(){
    twitter.postToBackEnd($('#tweet-text').val());
  });
});
