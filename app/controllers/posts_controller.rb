class PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :load_post, only: %i[show edit update destroy]

  def new
    @post = Post.new
  end

  def create
    @post = Post.new post_params

    if @post.save
      flash[:success] = "Post was created successfully!"
      redirect_to root_path
    else
      render :new
    end
  end

  def show
    @popular_posts = Post.except_current_post(@post).likes_order.limit(3)
  end

  def edit
  end

  def update
    if @post.update post_params
      flash[:success] = "Post was updated successfully!"
      redirect_to @post
    else
      render :edit
    end
  end

  def destroy
    if @post.destroy
      flash[:success] = "Post was destroyed successfully!"
      redirect_to root_path
    end
  end

  private

  def post_params
    params.require(:post).permit Post::POST_ATTRS
  end

  def load_post
    @post = Post.find_by id: params[:id]

    return if @post
    redirect_to root_path
  end
end
