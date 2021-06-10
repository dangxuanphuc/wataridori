Rails.application.routes.draw do
  devise_for :users
  root "static_pages#index"
  get "about-me", to: "static_pages#about"
  get "favorite-songs", to: "static_pages#song"
  get "emoticons", to: "static_pages#emoticon"
  match "/404", to: "errors#error_404", via: :all
  match "/422", to: "errors#error_422", via: :all
  match "/500", to: "errors#error_500", via: :all

  resources :posts, param: :slug do
    member do
      put :vote
      put :unvote
    end
  end
  resources :tags, param: :slug, only: %i(show)
end
