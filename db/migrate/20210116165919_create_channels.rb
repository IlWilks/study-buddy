class CreateChannels < ActiveRecord::Migration[6.0]
  def change
    create_table :channels do |t|
      t.string :subject
      t.boolean :public
      t.text :description
      t.belongs_to :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
