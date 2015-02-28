class GameEquipment < ActiveRecord::Base
	belongs_to:user
	
	def total_weight
		if weight.present? && quantiy.present?
			weight * quantiy
		else
			nil
		end
	end
end
