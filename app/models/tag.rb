class Tag < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: %i(slugged finders)

  has_many :post_tags, dependent: :destroy
  has_many :posts, through: :post_tags

  before_validation :convert_slug

  def to_s
    name
  end

  def tag_show?
    posts.published.exists?
  end

  private

  def convert_slug
    self.slug = if name.japanese?
                  name.kanji? ? "nihongo" : name.romaji
                else
                  Vietnameses.convert_unicode(name).parameterize.dasherize
                end
  end
end
