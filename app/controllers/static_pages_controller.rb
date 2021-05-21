class StaticPagesController < ApplicationController
  def index
    @posts = Post.all
  end

  def about
  end

  def song
  end
end
