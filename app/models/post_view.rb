class PostView < ApplicationRecord
  belongs_to :post
  counter_culture :post, column_name: "views_count"

  validates :browser_uid, uniqueness: {scope: :post_id}
end
