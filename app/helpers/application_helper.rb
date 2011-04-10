module ApplicationHelper
  TWITTER_HANDLE_REGEX=/\s+(@\S+)/
  URL_REGEX = /(https?\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/+\S+)?)/
  def linkify(tweet)
    tweet.gsub(URL_REGEX) do |match|
      %Q{ <a href="#{$1}">#{$1}</a>}
    end.gsub(TWITTER_HANDLE_REGEX) do |match|
      handle = $1.split('@')[1]
      %Q{ <a href="http://twitter.com/#{handle}">#{$1}</a>}
    end
  end
end
