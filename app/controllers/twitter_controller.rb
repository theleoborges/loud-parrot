class TwitterController < ApplicationController
  def tweet
    Twitter.update(params[:text])
    render :text => "Status updated.", :layout => false
  end
end
