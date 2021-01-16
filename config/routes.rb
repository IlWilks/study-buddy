Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :users do
      resources :groups
    end
    resources :groups do
      resources :channels
    end
    resources :channels do
      resources :comments
    end
    # resources :users do
    #   resources :comments 
    # end
  end
end
