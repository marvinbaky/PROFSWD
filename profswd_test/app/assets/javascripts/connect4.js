// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
app = {};
	
	var arr = [];
	for(var i = 0; i < 7; i++){
		arr[i] = [];    
		for(var j = 0; j < 7; j++){ 
			arr[i][j] = 0;    
		}    
	}
	
	var win = false;
	var turn_p1 = true;
	var col1_index, col2_index, col3_index, col4_index, col5_index, col6_index, col7_index;
	col1_index = col2_index = col3_index = col4_index = col5_index = col6_index = col7_index = 6;
	var divClone = $("#allcols").clone();
	
	$(document).ready(function(){
		var change_p1 = function(){
			$("#p1").text($("input[name='input_name1']").val());
		}
		
		var change_p2 = function(){
			$("#p2").text($("input[name='input_name2']").val());
		}
		
		var addCircle = function(){
			if(!win){
				console.log("Clicked!");
				var bottom = 75;
				
				var element;
				var curr_col;
				var curr_row;
				if($(this).attr("id") == "col1"){
					curr_col = 0;
					curr_row = col1_index;
					if(turn_p1 == true){
						arr[curr_row][0] = 1;
						element = $("<div class = circles_red></div>");	
					}
					else{
						arr[curr_row][0] = 2;
						element = $("<div class = circles_blue></div>");	
					}
					bottom += (7 - curr_row - 1) * 75;
					col1_index--;
				}
				else if($(this).attr("id") == "col2"){
					curr_col = 1;
					curr_row = col2_index;
					if(turn_p1 == true){
						arr[curr_row][curr_col] = 1;
						element = $("<div class = circles_red></div>");	
					}
					else{
						arr[curr_row][curr_col] = 2;
						element = $("<div class = circles_blue></div>");	
					}
					bottom += (7 - curr_row - 1) * 75;
					col2_index--;
				}
				else if($(this).attr("id") == "col3"){
					curr_col = 2;
					curr_row = col3_index;
					if(turn_p1 == true){
						arr[curr_row][curr_col] = 1;
						element = $("<div class = circles_red></div>");	
					}
					else{
						arr[curr_row][curr_col] = 2;
						element = $("<div class = circles_blue></div>");	
					}
					bottom += (7 - curr_row - 1) * 75;
					col3_index--;
				}
				else if($(this).attr("id") == "col4"){
					curr_col = 3;
					curr_row = col4_index;
					if(turn_p1 == true){
						arr[curr_row][curr_col] = 1;
						element = $("<div class = circles_red></div>");	
					}
					else{
						arr[curr_row][curr_col] = 2;
						element = $("<div class = circles_blue></div>");	
					}
					bottom += (7 - curr_row - 1) * 75;
					col4_index--;
				}
				else if($(this).attr("id") == "col5"){
					curr_col = 4;
					curr_row = col5_index;
					if(turn_p1 == true){
						arr[curr_row][curr_col] = 1;
						element = $("<div class = circles_red></div>");	
					}
					else{
						arr[curr_row][curr_col] = 2;
						element = $("<div class = circles_blue></div>");	
					}
					bottom += (7 - curr_row - 1) * 75;
					col5_index--;
				}
				else if($(this).attr("id") == "col6"){
					curr_col = 5;
					curr_row = col6_index;
					if(turn_p1 == true){
						arr[curr_row][curr_col] = 1;
						element = $("<div class = circles_red></div>");	
					}
					else{
						arr[curr_row][curr_col] = 2;
						element = $("<div class = circles_blue></div>");	
					}
					bottom += (7 - curr_row - 1) * 75;
					col6_index--;
				}
				else if($(this).attr("id") == "col7"){
					curr_col = 6;
					curr_row = col7_index;
					if(turn_p1 == true){
						arr[curr_row][curr_col] = 1;
						element = $("<div class = circles_red></div>");	
					}
					else{
						arr[curr_row][curr_col] = 2;
						element = $("<div class = circles_blue></div>");	
					}
					bottom += (7 - curr_row - 1) * 75;
					col7_index--;
				}
				
				$(this).append(element);
				
				var length = $(this).children().length;
				
				$($(this).children()[length-1]).animate({top: '100%', 'margin-top': '-' + bottom +'px'}, "slow");
				
				if(turn_p1){
					if(checkWin(curr_row, curr_col, 1)){
						$("#win").text($("#p1").text() + " Wins!");
						win = true;
					}
					
					turn_p1 = false;
				}
				else{
					if(checkWin(curr_row, curr_col, 2)){
						$("#win").text($("#p2").text() + " Wins!");
						win = true;
					}
					
					turn_p1 = true;
				}
			}
		}
		
		var reset = function(){
			$("#allcols").replaceWith('<div id="allcols">'
				+ '<div id="col1" class = "cols"></div>'
				+ '<div id="col2" class = "cols"></div>'
				+ '<div id="col3" class = "cols"></div>'
				+ '<div id="col4" class = "cols"></div>'
				+ '<div id="col5" class = "cols"></div>'
				+ '<div id="col6" class = "cols"></div>'
				+ '<div id="col7" class = "cols"></div>'
				+ '<p id="win"></p>'
				+ '</div>');
				for(var i = 0; i < 7; i++){
					arr[i] = [];    
					for(var j = 0; j < 7; j++){ 
						arr[i][j] = 0;    
					}    
				}
				win = false;
				turn_p1 = true;
				col1_index = col2_index = col3_index = col4_index = col5_index = col6_index = col7_index = 6;
				$("#col1").click(addCircle);
				$("#col2").click(addCircle);
				$("#col3").click(addCircle);
				$("#col4").click(addCircle);
				$("#col5").click(addCircle);
				$("#col6").click(addCircle);
				$("#col7").click(addCircle);
		}
		
		$("button[name='submit_button1']").click(change_p1);
		$("button[name='submit_button2']").click(change_p2);
		$("#col1").click(addCircle);
		$("#col2").click(addCircle);
		$("#col3").click(addCircle);
		$("#col4").click(addCircle);
		$("#col5").click(addCircle);
		$("#col6").click(addCircle);
		$("#col7").click(addCircle);
		$("#reset").click(reset);
	});
	
	var Node = function(row, col){
		this.row = row;
		this.col = col;
	};
	
	var checkVisit = function(visited, node){
		var i;
		
		for(i = 0; i < visited.length; i++)
			if(visited[i].row == node.row && visited[i].col == node.col)
				return true;
		
		return false;
	};
	
	function checkWin(row, col, player){
		var node = new Node(row, col);
		var queue = [];
		var visited = [];
		var total = 1;
		queue.push(node);
		while(queue.length > 0){
			
			currNode = queue.shift();
			console.log(total);
			if(total == 4)
				return true;
			
			if(currNode.col - 1 >= 0 && arr[currNode.row][currNode.col-1] == player){ //left
				var tempNode = new Node(currNode.row, currNode.col-1);
				if(!checkVisit(visited, tempNode)){
					queue.push(tempNode);
					total++;
				}
			}
			
			if(currNode.col + 1 < 7 && arr[currNode.row][currNode.col+1] == player){ //right
				var tempNode = new Node(currNode.row, currNode.col+1);
				if(!checkVisit(visited, tempNode)){
					queue.push(tempNode);
					total++;
				}
			}
			
			visited.push(currNode);
		}
		
		node = new Node(row, col);
		queue = [];
		visited = [];
		total = 1;
		queue.push(node);
		while(queue.length > 0){
			
			currNode = queue.shift();
			console.log(total);
			if(total == 4)
				return true;
			
			if(currNode.row - 1 >= 0 && arr[currNode.row-1][currNode.col] == player){ //up
				var tempNode = new Node(currNode.row-1, currNode.col);
				if(!checkVisit(visited, tempNode)){
					queue.push(tempNode);
					total++;
				}
			}
			
			if(currNode.row + 1 < 7 && arr[currNode.row+1][currNode.col] == player){ //down
				var tempNode = new Node(currNode.row+1, currNode.col);
				if(!checkVisit(visited, tempNode)){
					queue.push(tempNode);
					total++;
				}
			}
			
			visited.push(currNode);
		}
		
		node = new Node(row, col);
		queue = [];
		visited = [];
		total = 1;
		queue.push(node);
		while(queue.length > 0){
			
			currNode = queue.shift();
			console.log(total);
			if(total == 4)
				return true;
			
			if(currNode.row - 1 >= 0 && currNode.col - 1 >= 0 && arr[currNode.row-1][currNode.col-1] == player){ //up
				var tempNode = new Node(currNode.row-1, currNode.col-1);
				if(!checkVisit(visited, tempNode)){
					queue.push(tempNode);
					total++;
				}
			}
			
			if(currNode.row + 1 < 7 && currNode.col + 1 < 7 && arr[currNode.row+1][currNode.col+1] == player){ //down
				var tempNode = new Node(currNode.row+1, currNode.col+1);
				if(!checkVisit(visited, tempNode)){
					queue.push(tempNode);
					total++;
				}
			}
			
			visited.push(currNode);
		}
		
		node = new Node(row, col);
		queue = [];
		visited = [];
		total = 1;
		queue.push(node);
		while(queue.length > 0){
			
			currNode = queue.shift();
			console.log(total);
			if(total == 4)
				return true;
			
			if(currNode.row - 1 >= 0 && currNode.col + 1 < 7 && arr[currNode.row-1][currNode.col+1] == player){ //up
				var tempNode = new Node(currNode.row-1, currNode.col+1);
				if(!checkVisit(visited, tempNode)){
					queue.push(tempNode);
					total++;
				}
			}
			
			if(currNode.row + 1 < 7 && currNode.col - 1 >= 0 && arr[currNode.row+1][currNode.col-1] == player){ //down
				var tempNode = new Node(currNode.row+1, currNode.col-1);
				if(!checkVisit(visited, tempNode)){
					queue.push(tempNode);
					total++;
				}
			}
			
			visited.push(currNode);
		}
		
		return false;
	}