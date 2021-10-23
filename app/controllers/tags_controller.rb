class TagsController < ApplicationController
  before_action :load_tag, only: %i(show)

  def show
    load_data
  end

  private

  def load_tag
    @tag = Tag.find_by! slug: params[:slug]

    raise ActionController::RoutingError.new("Not Found") unless has_published?
  end

  def load_data
    if current_user
      @posts = @tag.posts.sort_by_created_at
      @popular_posts = Post.likes_order.limit(3)
      @recent_posts = Post.sort_by_created_at.limit(5)
    else
      @posts = @tag.posts.published.sort_by_created_at
      @popular_posts = Post.published.likes_order.limit(3)
      @recent_posts = Post.published.sort_by_created_at.limit(5)
    end
  end

  def has_published?
    @tag.posts.published.exists? || current_user
  end
end
