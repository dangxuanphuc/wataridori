class PostsController < ApplicationController
  before_action :raise_not_found, except: %i(show vote unvote)
  before_action :authenticate_user!, except: %i(show vote unvote)
  before_action :load_post, only: %i(show edit update destroy vote unvote)
  before_action :set_browser_uid, only: %i(show vote unvote)

  def show
    count_view
    load_data
  end

  def new
    @post = Post.new
  end

  def edit; end

  def create
    @post = Post.new post_params

    if @post.save
      redirect_to root_path
    else
      render :new
    end
  end

  def update
    if @post.update post_params
      redirect_to @post
    else
      render :edit
    end
  end

  def destroy
    @post.destroy
    redirect_to root_path
  end

  def vote
    post_like = PostLike.find_or_initialize_by params_reaction

    respond_to do |format|
      format.js do
        @post = @post.reload if post_like.save
      end
    end
  end

  def unvote
    post_like = @post.post_likes
                     .find_by(browser_uid: cookies[:browser_uid])

    respond_to do |format|
      format.js do
        @post = @post.reload if post_like&.destroy
      end
    end
  end

  private

  def post_params
    params.require(:post).permit Post::POST_ATTRS
  end

  def load_post
    @post = Post.find_by! slug: params[:slug]

    raise ActionController::RoutingError, "Not Found" if post_privated?
  end

  def count_view
    watched = @post.post_views.find_by(browser_uid: cookies[:browser_uid])
    return if watched.present?

    post_view = PostView.find_or_initialize_by params_reaction
    post_view.save

    @post = @post.reload
  end

  def set_browser_uid
    cookies[:browser_uid] ||= SecureRandom.uuid
  end

  def params_reaction
    browser_uid = cookies[:browser_uid]
    user_agent = request.env["HTTP_USER_AGENT"]
    ip_address = request.env["REMOTE_ADDR"]

    {
      post_id: @post.id,
      browser_uid: browser_uid,
      user_agent: user_agent,
      ip_address: ip_address
    }
  end

  def post_privated?
    @post.privated? && !current_user
  end

  def load_data
    if current_user
      @popular_posts = Post.except_current(@post).likes_order.limit(3)
      @recent_posts = Post.except_current(@post).sort_by_created_at.limit(5)
      @related_posts = Post.except_current(@post)
    else
      @popular_posts = Post.published.except_current(@post).likes_order.limit(3)
      @recent_posts = Post.published.except_current(@post)
                          .sort_by_created_at.limit(5)
      @related_posts = Post.published.except_current(@post)
    end
  end
end
