Rails.application.routes.draw do
  devise_for :users
  root "static_pages#index"
  get "about-me", to: "static_pages#about"
  get "favorite-songs", to: "static_pages#song"

  resources :posts, only: :show
end
