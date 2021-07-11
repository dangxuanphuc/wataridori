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
    if params[:status] == "next"
      song_id = params[:song_id].to_i + 1
    else
      song_id = params[:song_id].to_i - 1 == 0 ? Song.last.id : params[:song_id].to_i - 1
    end

    lastest_song = cookies[:song_id].present? ? Song.find_by(id: cookies[:song_id]) : Song.all.sample

    @song = Song.find_by(id: song_id) || lastest_song
  end

  def emoticon
    @emoticons = JSON.parse(File.read("public/emoticons/emoticon.json"))
  end
end
