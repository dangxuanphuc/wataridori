class TagsController < ApplicationController
  before_action :load_tag, only: %i(show)

  def show
    @posts = @tag.posts.sort_by_created_at
    @popular_posts = Post.likes_order.limit(3)
    @recent_posts = Post.sort_by_created_at.limit(5)
  end

  private

  def load_tag
    @tag = Tag.find_by slug: params[:slug]

    raise ActionController::RoutingError.new("Not Found") unless @tag
  end
end
