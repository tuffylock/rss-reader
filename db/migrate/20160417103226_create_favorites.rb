class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.date :publish_date, null: false
      t.string :title, null: false
      t.string :url, null: false
      t.string :img
      t.text :description
      t.string :guid, null: false

      t.timestamps null: false
    end
    add_index :favorites, :guid, unique: true
  end
end
