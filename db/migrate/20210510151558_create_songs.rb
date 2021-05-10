class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :name
      t.string :author
      t.string :url

      t.timestamps
    end
  end
end
