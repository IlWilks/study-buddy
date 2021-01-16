# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models
  has_many :user_groups
  has_many :groups, through: :user_groups
  has_many :comments, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end
