class CreateIssues < ActiveRecord::Migration
  def up
    create_table :issues do |t|
    	t.integer "user_id"
    	# same as: t.references :user
    	t.string "title"
    	t.float "lat"
    	t.float "long"
    	t.string "photo"
    	t.boolean "resolved", :default => false
      t.timestamps
    end
    add_index("issues", "user_id")
  end

  def down
    drop_table :issues
  end

end
