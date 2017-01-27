/*Assignment Information
	David Allen
	Assignment 12, AJAX Online
	May 06, 2015
*/

/*Document Information
	An example of the jQuery plugin, Complexify.  The percentage of how complex
	a user-entered value is outputted, and it changes as the value is changed.
*/

(function($) {
	$(document).ready(function() {
		console.log("document is ready");
		
		var output = document.getElementById("output");
		$("#submit").on("click", function() {
			$("#test").complexify({}, function(valid, complexity){
			var p = document.createElement("p");
			var cpx = document.createTextNode(complexity.toFixed(2) + "%");
			p.appendChild(cpx);
			output.replaceChild(p, output.firstChild);
			});
		});
	});
})(jQuery)