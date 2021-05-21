class Post < ApplicationRecord
  has_many :post_categories, dependent: :destroy
  has_many :post_tags, dependent: :destroy
  has_many :tags, through: :post_tags
  has_many :comments, dependent: :destroy
  has_many :post_likes, dependent: :destroy
  has_many :post_views, dependent: :destroy

  POST_ATTRS = %w(title content tag_list image image_cache).freeze
  mount_uploader :image, ImageUploader

  def tag_list
    self.tags.collect do |tag|
      tag.name
    end.join(", ")
  end

  def tag_list=(tags_string)
    tag_names = tags_string.split(",").collect{ |s| s.strip.downcase }.uniq
    new_or_found_tags = tag_names.collect { |name| Tag.find_or_create_by(name: name) }
    self.tags = new_or_found_tags
  end
end
