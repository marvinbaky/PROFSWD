class GamesController < ApplicationController
	def inventory
		@name_search = params[:name_search]
		@results_item = GameEquipment.where(name: @name_search).to_a
	end
	def create_game_equipment
		values = params.permit(:name, :quantitiy, :weight)
		GameEquipment.create(values)
		redirect_to action: :inventory
	end
	
	def delete_game_equipment
		id = params[:id]
		GameEquipment.find(id).destroy
		redirect_to action: :inventory
	end
	 skip_before_filter :verify_authenticity_token 
end
