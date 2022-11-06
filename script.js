var done;
//using the jQuery ui-draggable function
$(function() {
	$(".slider img").draggable({
		axis: 'x', //restrict movement to x-axis
		containment: 'parent', //contain within the parent element

		//callback fired when the mouse button is released
		stop: function(event, ui) {
			//if successful, i.e., the arrow is dragged to the end
			if (ui.position.left > 190) {
				//set the flag to true
				done = true;
			}
			//if not unlocked yet, i.e., the arrow is not dragged to the end
			else{
				done = false;
			}
			//snap it back to the left with sliding animation
			$(this).animate({
				left: 0
			})
			//if the flag is set to true, go to another html page
			if(done){
				window.location.href='./audioscreen.html'
			}
		}
	});
});
