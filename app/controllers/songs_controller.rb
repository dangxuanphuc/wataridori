class SongsController < ApplicationController
  before_action :raise_not_found, except: %i(songs)
  before_action :authenticate_user!, except: %i(songs)
  before_action :load_song, only: %i(edit update destroy)

  def index
    @songs = Song.all
  end

  def new
    @song = Song.new
  end

  def create
    @song = Song.new song_params

    respond_to do |format|
      @song.save
      format.js
    end
  end

  def edit; end

  def update
    respond_to do |format|
      @song.update song_params
      format.js
    end
  end

  def destroy
    respond_to do |format|
      @song.destroy
      format.js
    end
  end

  def songs
    song_id = if params[:song_id].to_i > Song.last.id
                Song.first.id
              elsif params[:song_id].to_i.zero?
                Song.last.id
              else
                params[:song_id].to_i
              end
    song_id = nil if params[:song_id].blank?

    current_song = Song.find_by(id: cookies[:song_id])
    lastest_song = cookies[:song_id].present? ? current_song : Song.all.sample

    @song = Song.find_by(id: song_id) || lastest_song
  end

  private

  def song_params
    params.require(:song).permit :id, :name, :author, :url, :cover
  end

  def load_song
    @song = Song.find params[:id]
  end
end
