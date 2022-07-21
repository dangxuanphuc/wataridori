module ApplicationHelper
  def full_title page_title = ""
    base_title = "Wataridori's Blog"
    page_title.empty? ? base_title : "#{page_title} | #{base_title}"
  end

  def active_class controller, action
    "active" if params[:action] == action && params[:controller] == controller
  end

  # rubocop:disable Rails/OutputSafety
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

    Redcarpet::Markdown.new(Redcarpet::Render::HTML,
                            options).render(content).html_safe
  end
  # rubocop:enable Rails/OutputSafety

  def default_meta_tags
    {
      canonical: request.original_url,
      reverse: true,
      og: {
        title: "Wataridori's Blog",
        type: "Personal Blog",
        url: request.original_url,
        image: "https://res.cloudinary.com/phucdx/image/upload/v1625500651/wataridori/images/cover_aulkea.jpg"
      }
    }
  end

  def show_footer params
    return false if params[:action] == "songs" && params[:controller] == "songs"

    params[:action] != "emoticon" && params[:controller] != "devise/sessions" &&
      params[:action] != "render404" && params[:action] != "render422" &&
      params[:action] != "render500"
  end
end
