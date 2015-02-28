$(document).ready(function() {
		
	//our code will go here
	var currentPosition = 0;
	var slideWidth = 343;
	var slides = $('.slide');
	var numberOfSlides = slides.length;
	var slideShowInterval;
	var speed = 3000;
	
	slideShowInterval = setInterval(changePosition, speed);
	
	slides.wrapAll('<div id="slidesHolder"></div>')
	slides.css({ 'float' : 'left' });
	
	$('#slidesHolder').css('width', slideWidth * numberOfSlides);
	
	function changePosition() {
		if(currentPosition == numberOfSlides - 1) {
			currentPosition = 0;
		} 
		else {
			currentPosition++;
		}
		moveToRightSlide();
	}
		
	var changeToRight = function(){
		console.log("CLICK RIGHT");
		if(currentPosition == numberOfSlides - 1) {
				currentPosition = 0;
			} 
			else {
				currentPosition++;
			}
			moveToRightSlide();
	}
	
	var changeToLeft = function(){
		console.log("CLICK LEFT");
		if(currentPosition == 0) {
				currentPosition = numberOfSlides - 1;
		}
		else{
			currentPosition--;
		}
		moveToLeftSlide();
	}
	
	function moveToRightSlide() {
			$('#slidesHolder').animate({'marginLeft' : slideWidth*(-currentPosition)});
	}
	
	function moveToLeftSlide() {
			$('#slidesHolder').animate({'marginLeft' : -1*slideWidth*(currentPosition)});
	}
	
	$('#right').click(changeToRight);
	$('#left').click(changeToLeft);
	
});