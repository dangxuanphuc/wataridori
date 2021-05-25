class CommentsController < ApplicationController
  before_action :load_post
  before_action :load_comment

  def new
  end

  def create
  end

  private

  def comments_params
    params.require(:comment).permit :user_name, :email, :content
  end

  def load_comment
    @comment = Comment.find_by id: params[:id]

    return if @comment
    redirect_to @post
  end

  def load_post
    @post = Post.find_by id: params[:post_id]

    return if @post
    redirect_to root_path
  end
end
