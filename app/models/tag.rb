class Tag < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: %i(slugged finders)

  has_many :post_tags, dependent: :destroy
  has_many :posts, through: :post_tags

  def to_s
    name
  end

  def tag_show?
    posts.published.exists?
  end
end
