class Song < ApplicationRecord
  validates_presence_of :name, :author, :url, :cover

  scope :order_by_created_at_desc, -> { order created_at: :desc }

  def previous
    Song.where(["id < ?", id]).order(:id).last
  end

  def next
    Song.where(["id > ?", id]).order(:id).first
  end
end
