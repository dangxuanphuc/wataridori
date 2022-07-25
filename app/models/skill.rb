class Skill < ApplicationRecord
  validates :name, :percent, :skill_type, presence: true
  validates :percent,
            numericality: { greater_than_or_equal_to: 0,
                            less_than_or_equal_to: 100,
                            only_integer: true }

  enum skill_type: { language: 0, technology: 1 }
end
