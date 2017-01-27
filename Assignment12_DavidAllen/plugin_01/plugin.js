/*Assignment Information
	David Allen
	Assignment 12, AJAX Online
	May 06, 2015
*/

/*Document Information
	An example of the jQuery plugin, Alertify.  Three examples are implemented
	in this document: an alert dialog, a confirm dialog, and a prompt dialog.
*/

(function($) {
	$(document).ready(function() {
		console.log("document is ready");
		
		$("#alert").on("click", function() {
			alertify.alert("Alert!")
			alertify.log("Alert has been clicked");
		});
		
		$("#confirm").on("click", function() {
			alertify.confirm("Would you like to confirm?", function (e) {
				if (e) {
					// user clicked "ok"
					alertify.success("User clicked OK");
				} else {
					// user clicked "cancel"
					alertify.error("User clicked Cancel");
				}	
			});
		});

		$("#prompt").on("click", function() {
			alertify.prompt("Enter a value.", function (e, str) {
				// str is the input text
				if (e) {
					// user clicked "ok"
					alertify.success("User entered: " + str);
				} else {
					// user clicked "cancel"
					alertify.error("User clicked Cancel");
				}
			}
		, "This is the default value.")})
	});
})(jQuery)