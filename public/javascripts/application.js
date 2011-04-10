var voiceCommands;

function speechcapable(){
    var elem = document.createElement('input');
    var support = 'onwebkitspeechchange' in elem || 'speech' in elem;
    return support;
}

$(function(){
  var twitter = LoudParrot.Twitter(jQuery, {
    resultsContainer:'#result',
    tweetContainer:'#tweet-text'
  });
  voiceCommands = LoudParrot.VoiceCommands(twitter);

  $('#tweet-link').click(function(){
    twitter.postToBackEnd($('#tweet-text').val());
  });

  if(!speechcapable()){
    $('body').html('Your browser does not support speech recognition. Try one the Google Chrome Beta Channel: <a href="http://www.google.com/intl/en/landing/chrome/beta/">http://www.google.com/intl/en/landing/chrome/beta/</a>');
  }
});
