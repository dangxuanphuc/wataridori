class Favorite < ApplicationRecord
  scope :song, ->{where favorite_type: "song"}
  scope :singer, ->{where favorite_type: "singer"}
  scope :other, ->{where favorite_type: "other"}
end
