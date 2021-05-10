class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :image
      t.text :content
      t.integer :likes_count, null: false, default: 0
      t.integer :views_count, null: false, default: 0

      t.timestamps
    end
  end
end
