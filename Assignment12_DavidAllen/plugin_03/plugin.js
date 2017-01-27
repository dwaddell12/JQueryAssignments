/*Assignment Information
	David Allen
	Assignment 12, AJAX Online
	May 06, 2015
*/

/*Document Information
	An example of the jQuery plugin, Fancy Input.  A textarea or input of type 'text'
	can be modified to have an added style to it.
*/

(function($) {
	$(document).ready(function() {
		console.log("document is ready");
		
		$("#test").fancyInput();
	});
})(jQuery)