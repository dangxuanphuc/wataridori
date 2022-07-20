class Song < ApplicationRecord
  validates_presence_of :name, :author, :url, :cover

  def previous
    Song.where(["id < ?", id]).order(:id).last
  end

  def next
    Song.where(["id > ?", id]).order(:id).first
  end
end
