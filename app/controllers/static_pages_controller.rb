class StaticPagesController < ApplicationController
  def index
    @posts = if current_user
               Post.sort_by_created_at
             else
               Post.published.sort_by_created_at
             end
  end

  def about
    @skill_language = Skill.language
    @skill_technology = Skill.technology
    @favorite_songs = Favorite.song.shuffle
    @favorite_singers = Favorite.singer.shuffle
    @favorite_others = Favorite.other.shuffle
  end

  def song
    song_id = if params[:song_id].to_i > Song.last.id
                Song.first.id
              elsif params[:song_id].to_i.zero?
                Song.last.id
              else
                params[:song_id].to_i
              end
    song_id = nil if params[:song_id].blank?

    lastest_song = cookies[:song_id].present? ? Song.find_by(id: cookies[:song_id]) : Song.all.sample

    @song = Song.find_by(id: song_id) || lastest_song
  end

  def emoticon
    @emoticons = JSON.parse(File.read("public/emoticons/emoticon.json"))
  end
end
