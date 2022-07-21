class PostLike < ApplicationRecord
  belongs_to :post
  counter_culture :post, column_name: "likes_count"

  validates :browser_uid, uniqueness: { scope: :post_id }
end
