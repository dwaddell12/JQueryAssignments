/*Assignment Information
	David Allen
	Assignment 12, AJAX Online
	May 06, 2015
*/

/*Document Information
	An example of the jQuery plugin, Sticky.  With Sticky, an element will be perpetually within
	the browser window.
*/

(function($) {
	$(document).ready(function() {
		console.log("document is ready");

		$('#test').sticky({topSpacing: 10, center: true});
	});
})(jQuery)