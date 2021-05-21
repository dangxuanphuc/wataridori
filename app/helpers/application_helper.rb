module ApplicationHelper
  def full_title page_title = ""
    base_title = "Wataridori's Blog"
    page_title.empty? ? base_title : page_title + " | " + base_title
  end

  def active_class action
    params[:action] == action ? "active" : nil
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

    Redcarpet::Markdown.new(Redcarpet::Render::HTML, options)
      .render content
  end
end
