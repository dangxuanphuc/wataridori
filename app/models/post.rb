class Post < ApplicationRecord
  has_many :post_categories, dependent: :destroy
  has_many :post_tags, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :post_likes, dependent: :destroy
  has_many :post_views, dependent: :destroy
end
