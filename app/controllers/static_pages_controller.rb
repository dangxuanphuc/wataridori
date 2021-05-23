class StaticPagesController < ApplicationController
  def index
    @posts = Post.all
  end

  def about
  end

  def song
  end

  def emoticon
    @emoticons = JSON.parse(File.read("public/emoticons/emoticon.json"))
  end
end
