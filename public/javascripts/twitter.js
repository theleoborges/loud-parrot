var LoudParrot = this.LoudParrot || {};

LoudParrot.Twitter = function($, options) {
  function postToBackEnd(text) {
    $.post('tweet', {text: text}, function(data) {
      $(options.resultsContainer).html(data);
    });
  }

  function tweet(text) {
    $(options.tweetContainer).val(text);
    if (confirm("Post tweet '" + text + "' ? Cancel to fix it and post manually.")) {
      postToBackEnd(text);
    }
  }

  return {
    tweet: tweet,
    postToBackEnd: postToBackEnd
  }
};