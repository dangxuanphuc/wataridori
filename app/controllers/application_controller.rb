class ApplicationController < ActionController::Base
  def raise_not_found
    raise ActionController::RoutingError, "Not Found" unless current_user
  end
end
