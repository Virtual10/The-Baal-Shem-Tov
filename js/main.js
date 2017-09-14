$(document).ready(function(){
/*	$('#').slimmenu(
	{
		resizeWidth: '800',
		collapserTitle: 'Main Menu',
		animSpeed: 'medium',
		easingEffect: null,
		indentChildren: true,
		childrenIndenter: '&nbsp;'
	});
*/
	$(function () {
		$.scrollUp({
			 
			scrollName: 'scrollUp',		 // Element ID 
			scrollDistance: 300, 		 // Distance from top/bottom before showing element (px) 
			scrollFrom: 'top', 			 // 'top' or 'bottom'          
			scrollSpeed: 300,            // Speed back to top (ms)
	        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
	        animation: 'slide',           // Fade, slide, none          
			animationSpeed: 500,         // Animation speed (ms)
	        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
	        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
	        scrollText: '<i class="fa fa-angle-up"></i>', // You can set text or use icon as it appear here
	        scrollTitle: false,          // Set a custom <a> title if required.
	        scrollImg:false,            // Set true to use image
	        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	        zIndex: 2147483647           // Z‐Index for the overlay  
	    }); 
	});
});