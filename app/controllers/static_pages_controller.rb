class StaticPagesController < ApplicationController
  before_action :raise_not_found, only: %i(emoticon)

  def index
    if current_user
      @posts = Post.sort_by_created_at
    else
      @posts = Post.published.sort_by_created_at
    end
  end

  def about
    @skill_language = Skill.language
    @skill_technology = Skill.technology
    @favorite_songs = Favorite.song.shuffle
    @favorite_singers = Favorite.singer.shuffle
    @favorite_others = Favorite.other.shuffle
  end

  def emoticon
    @emoticons = JSON.parse(File.read("public/emoticons/emoticon.json"))
  end
end
