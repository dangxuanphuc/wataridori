class Song < ApplicationRecord
  validates :name, :author, :url, :cover, presence: true

  def previous
    Song.where(["id < ?", id]).order(:id).last
  end

  def next
    Song.where(["id > ?", id]).order(:id).first
  end
end
