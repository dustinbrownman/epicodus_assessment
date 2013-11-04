$(function() {
	var size = $("#lead-column > p").length;

	$("#lead-column > p").each(function(index) {
		if (index >= size / 2) {
			$(this).appendTo("#next-column");
		}
	});
});
