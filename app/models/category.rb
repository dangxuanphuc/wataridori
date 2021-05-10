class Category < ApplicationRecord
  has_many :post_categories, dependent: :destroy
end
