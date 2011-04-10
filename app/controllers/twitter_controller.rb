class TwitterController < ApplicationController
  layout false

  def tweet
    if (1..140).include?(params[:text].size)
      Twitter.update(params[:text])
      render :text => "Status updated."
    else
      render :text => "Couldn't update status. Too long perhaps?"
    end
  end
end
