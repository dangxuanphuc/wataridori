class Post < ApplicationRecord
  extend FriendlyId
  friendly_id :title, use: %i(slugged finders)

  enum status: { privated: 0, published: 1 }

  has_many :post_categories, dependent: :destroy
  has_many :post_tags, dependent: :destroy
  has_many :tags, through: :post_tags
  has_many :comments, dependent: :destroy
  has_many :post_likes, dependent: :destroy
  has_many :post_views, dependent: :destroy

  POST_ATTRS = %w(title content tag_list image image_cache status).freeze
  mount_uploader :image, ImageUploader

  scope :likes_order, -> { order likes_count: :desc }
  scope :except_current, ->(id) { where.not(id: id) }
  scope :sort_by_created_at, -> { order created_at: :desc }

  before_validation :convert_slug

  def tag_list
    tags.map(&:name).join(", ")
  end

  def tag_list= tags_string
    tag_names = tags_string.split(",").map { |s| s.strip.downcase }.uniq
    new_or_found_tags = tag_names.map do |name|
      Tag.find_or_create_by(name: name)
    end
    self.tags = new_or_found_tags
  end

  private

  def convert_slug
    self.slug = uniq_slug.parameterize.dasherize
  end

  def uniq_slug
    "#{Vietnameses.convert_unicode(title)} #{SecureRandom.alphanumeric(10)}"
  end
end
