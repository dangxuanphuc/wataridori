class ChangeSkillTypeFromSkills < ActiveRecord::Migration[6.1]
  def change
    change_column :skills, :skill_type, "integer USING CAST(skill_type AS integer)", default: 1
  end
end
