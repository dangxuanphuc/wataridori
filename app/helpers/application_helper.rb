module ApplicationHelper
  def full_title page_title = ""
    base_title = "Wataridori's Blog"
    page_title.empty? ? base_title : page_title + " | " + base_title
  end

  def active_class controller, action
    params[:action] == action && params[:controller] == controller ? "active" : nil
  end

  def markdown content
    options = {
      autolink: true,
      no_intra_emphasis: true,
      disable_indented_code_blocks: true,
      fenced_code_blocks: true,
      lax_html_blocks: true,
      strikethrough: true,
      superscript: true,
      quote: true,
      highlight: true,
      tables: true,
      emoji: true
    }

    Redcarpet::Markdown.new(Redcarpet::Render::HTML, options).render(content).html_safe
  end

  def default_meta_tags
    {
      canonical: request.original_url,
      reverse: true,
      og: {
        title: "Wataridori's Blog",
        type: "Personal Blog",
        url: request.original_url,
        image: "https://res.cloudinary.com/phucdx/image/upload/v1625500651/wataridori/images/cover_aulkea.jpg",
      }
    }
  end

  def show_footer params
    params[:action] != "emoticon" && params[:controller] != "devise/sessions" &&
      params[:action] != "error_404" && params[:action] != "error_422" &&
      params[:action] != "error_500"
  end
end
