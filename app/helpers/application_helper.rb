module ApplicationHelper
  def full_title page_title = ""
    base_title = "Wataridori's Blog"
    page_title.empty? ? base_title : page_title + " | " + base_title
  end

  def active_class action
    params[:action] == action ? "active" : nil
  end
end
