class AddUsernamePasswordHashAndSaltToUser2 < ActiveRecord::Migration
  def change
	add_column :users, :username, :string
	add_column :users, :password_hash, :string
	add_column :users, :salt, :string
  end
end
