class SkillsController < ApplicationController
  before_action :load_skill, only: %i(edit update destroy)

  def index
    @skills = Skill.all
  end

  def new
    @skill = Skill.new
  end

  def create
    @skill = Skill.new skill_params

    respond_to do |format|
      @skill.save
      load_data
      format.js
    end
  end

  def edit; end

  def update
    respond_to do |format|
      @skill.update skill_params
      load_data
      format.js
    end
  end

  def destroy
    respond_to do |format|
      @skill.destroy
      load_data
      format.js
    end
  end

  private

  def skill_params
    params.require(:skill).permit :name, :percent, :skill_type
  end

  def load_skill
    @skill = Skill.find params[:id]
  end

  def load_data
    @skill_language = Skill.language
    @skill_technology = Skill.technology
  end
end
