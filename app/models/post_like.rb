class PostLike < ApplicationRecord
  belongs_to :post
  counter_culture :post, column_name: "likes_count"

  validates_uniqueness_of :browser_uid, scope: :post_id
end
