class CreatePostLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :post_likes do |t|
      t.string :browser_uid, null: false
      t.string :ip_address
      t.text :user_agent, size: :long
      t.references :post, null: false, foreign_key: true

      t.timestamps
    end
    add_index :post_likes, [:post_id, :browser_uid], unique: true
  end
end
