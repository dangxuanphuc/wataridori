class PostView < ApplicationRecord
  belongs_to :post
  counter_culture :post, column_name: "views_count"

  validates_uniqueness_of :browser_uid, scope: :post_id
end
