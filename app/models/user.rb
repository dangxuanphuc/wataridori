class User < ApplicationRecord
  devise :database_authenticatable, :rememberable

  has_many :comments, dependent: :destroy
end
