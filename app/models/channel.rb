class Channel < ApplicationRecord
  belongs_to :group
  has_many :comments, dependent: :destroy
end
