class MoviesController < ApplicationController

def create
	movie = Movie.create!( 
	   title:params[:title],
       year:params[:year],
       plot:params[:plot],
       poster:params[:poster],
       tomato_url:params[:tomato_url]
		)
	render json: movie.to_json
end

def show
	@movie = Movie.find(params[:id])
	render json: movie.to_json
end



end
