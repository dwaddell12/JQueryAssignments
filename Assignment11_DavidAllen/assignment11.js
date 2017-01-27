/*Assignment Information
	David Allen
	Assignment 11, AJAX Online
	Apr 30, 2015
*/

/*Document Information
	This javascript file contains references to jquery for assignment11.
	
	In this assignment, the input fields of Email, Password, and BirthDate
	are modified to reflect JQueryUI elements.  The title for each of these
	fields are added via .getElementById, and they are then outputted via
	the tooltip property.  The birthday entry pops up a calendar with drop-down
	menus for the year and month.
*/

(function($) {
	$(document).ready(function() {
		console.log("document is ready");
		
		var email = document.getElementById("inputEmail");
		var pass = document.getElementById("inputPassword");
		var bday = document.getElementById("inputBirthdate");
		email.title = "Enter your email.";
		pass.title = "Enter your password.";
		bday.title = "Enter your birth date.";
		
		$("#inputEmail").tooltip({
			position: {
				my: "left top",
				at: "right+5 top-5"
			}
		});
		$("#inputPassword").tooltip({
			position: {
				my: "left top",
				at: "right+5 top-5"
			}
		});
		$("#inputBirthdate").tooltip({
			position: {
				my: "left top",
				at: "right+5 top-5"
			}
		});
		
		$("#inputBirthdate").datepicker({
			changeMonth: true,
			changeYear: true
		});
	})
})(jQuery)