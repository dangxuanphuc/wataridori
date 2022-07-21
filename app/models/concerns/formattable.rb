module Formattable
  extend ActiveSupport::Concern

  def sns_escape str
    return "" if str.blank?

    str.gsub("%", "%25").gsub(" ", "%20").gsub("#", "%23")
       .gsub("+", "%2B").gsub(
         "<br>", "%0a"
       )
  end
end
