app = {};
	
	$(function() {
	
		var alert_me = function(){ 
			alert ('you clicked!'); 
			
			$("h1").text($("input[type ='text']").val());
		}
		
		

		$("input[type = 'button']").click(alert_me);
	});