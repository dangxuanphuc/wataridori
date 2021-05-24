class Skill < ApplicationRecord
  scope :language, -> { where skill_type: "language" }
  scope :technology, -> { where skill_type: "technology" }
end
