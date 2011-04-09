LoudParrot::Application.routes.draw do
  post 'tweet' => 'twitter#tweet'
  get 'sessions/callback', :to => 'sessions#callback', :as => 'callback'
  resources :sessions
  root :to => 'sessions#new'
end
