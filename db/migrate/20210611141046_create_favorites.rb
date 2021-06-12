class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.string :image
      t.string :name
      t.string :favorite_type

      t.timestamps
    end
  end
end
