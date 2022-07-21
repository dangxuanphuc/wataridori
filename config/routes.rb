Rails.application.routes.draw do
  devise_for :users
  root "static_pages#index"
  get "about-me", to: "static_pages#about"
  get "emoticons", to: "static_pages#emoticon"
  get "favorite-songs", to: "songs#songs"

  resources :posts, param: :slug do
    member do
      put :vote
      put :unvote
    end
  end
  resources :tags, param: :slug, only: %i(show)
  resources :songs, except: :destroy

  match "/404", to: "errors#render404", via: :all
  match "/422", to: "errors#render422", via: :all
  match "/500", to: "errors#render500", via: :all
end
