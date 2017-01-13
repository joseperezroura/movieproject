class AddStuffToMovies < ActiveRecord::Migration[5.0]
  def change
  	add_column :movies, :title, :string
  	add_column :movies, :year, :string 
  	add_column :movies, :plot, :string
  	add_column :movies, :poster, :string
  	add_column :movies, :tomato_url, :string 
  end
end
