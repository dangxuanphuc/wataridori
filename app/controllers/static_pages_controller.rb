class StaticPagesController < ApplicationController
  def index
    @posts = Post.all.sort_by_created_at
  end

  def about
    @skill_language = Skill.language
    @skill_technology = Skill.technology
    @favorite_songs = Favorite.song.shuffle
    @favorite_singers = Favorite.singer.shuffle
    @favorite_others = Favorite.other.shuffle
  end

  def song
  end

  def emoticon
    @emoticons = JSON.parse(File.read("public/emoticons/emoticon.json"))
  end
end
