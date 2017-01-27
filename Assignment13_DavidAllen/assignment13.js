/*Assignment Information
	David Allen
	Assignment 13, AJAX Online
	May 08, 2015
*/

/*Document Information
	This document contains references to an HTML document named index that
	displays the data of assignment 13.
*/

(function($) {
	$(document).ready(function() {
		console.log("document is ready");
		
		$("#enterIngredient").dialog({
			autoOpen: false,
			modal: true,
			resizeable: false,
			height: 200,
			buttons: {
				Add: function() {
					var addedIng = $("#ingredientDesc").val();
					var img = $("<img>").addClass("icon").attr("src", "icon-recyclebin_closed.png").attr("height", "25").attr("width", "25");
					var li = $("<li>").append($("<span>").text(addedIng).append(img));
					$("#ingredientList").append(li);
					img.on("click", function () {
						var thisLi = $(this).parent().parent();
						$(thisLi).remove();
					})
					$(this).dialog( "close" );
					},
				Cancel: function() {
				  $(this).dialog( "close" );
				}
			}
		})
		
		$("#addIngredient").click(function() {
			$("#enterIngredient").dialog("open");
		})
	})
})(jQuery)