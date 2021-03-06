class Group < ApplicationRecord
  has_many :channels, dependent: :destroy
  has_many :user_groups
  has_many :users, through: :user_groups
end
