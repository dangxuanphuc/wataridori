class AddCoverToSong < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :cover, :string
  end
end
